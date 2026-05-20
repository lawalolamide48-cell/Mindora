import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

import connectDB from "./db.js";
import authRoutes from "./routes/auth.js";
import authMiddleware from "./middleware/authMiddleware.js";
import Message from "./models/Message.js";

dotenv.config();

// CONNECT DATABASE
connectDB();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);

// OPENAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ===============================
// CHAT ROUTE (WITH MEMORY)
// ===============================
app.post("/api/chat", authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.userId;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // SAVE USER MESSAGE
    await Message.create({
      userId,
      sender: "user",
      text: message,
    });

    // GET LAST 10 MESSAGES (MEMORY)
    const history = await Message.find({ userId })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    const formattedHistory = history
      .reverse()
      .map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));

    // BUILD OPENAI MESSAGES
    const messages = [
      {
        role: "system",
        content:
          "You are Mindora, a calm, supportive AI mental wellness assistant. Remember conversation context and respond warmly and empathetically.",
      },
      ...formattedHistory,
      {
        role: "user",
        content: message,
      },
    ];

    // STREAM HEADERS
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    // OPENAI STREAM
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages,
    });

    let fullReply = "";

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      fullReply += content;
      res.write(content);
    }

    // SAVE AI RESPONSE
    await Message.create({
      userId,
      sender: "ai",
      text: fullReply,
    });

    res.end();
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).send("Streaming failed");
  }
});

// ===============================
// START SERVER
// ===============================
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    status: "Mindora Backend is running 🚀",
    message: "API is healthy",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});