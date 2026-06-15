const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Temporary memory storage
const chatHistory = [];

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    // Save user's message
    chatHistory.push({
      role: "user",
      content: message,
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are Mindora, a friendly and supportive mental wellness AI assistant.",
        },
        ...chatHistory,
      ],
      temperature: 0.7,
    });

    const aiReply = completion.choices[0].message.content;

    // Save AI's response
    chatHistory.push({
      role: "assistant",
      content: aiReply,
    });

    res.json({
      reply: aiReply,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      reply: "Something went wrong.",
    });
  }
};

module.exports = { sendMessage };