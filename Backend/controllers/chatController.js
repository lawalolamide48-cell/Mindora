const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
You are Mindora, a calm and supportive mental wellness companion.
Respond with warmth, privacy, and practical coping support.
Do not diagnose, prescribe medicine, or claim to replace professional care.
If the user may be in immediate danger or mentions self-harm, encourage them to contact local emergency services or a trusted person immediately.
`;

const normalizeHistory = (history = []) => {
  if (!Array.isArray(history)) return [];

  return history
    .filter(
      (item) =>
        item &&
        ["user", "assistant"].includes(item.role) &&
        typeof item.content === "string" &&
        item.content.trim()
    )
    .slice(-10)
    .map((item) => ({
      role: item.role,
      content: item.content.trim(),
    }));
};

const sendMessage = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        reply: "Please enter a message before sending.",
      });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        reply: "Backend is missing GROQ_API_KEY in the .env file.",
      });
    }

    const conversation = [
      { role: "system", content: SYSTEM_PROMPT },
      ...normalizeHistory(history),
      { role: "user", content: message.trim() },
    ];

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: conversation,
      temperature: 0.7,
    });

    const aiReply =
      completion.choices?.[0]?.message?.content ||
      "I am here with you. Could you tell me a little more?";

    return res.json({
      reply: aiReply,
    });
  } catch (error) {
    console.error("Chat error:", error);

    return res.status(500).json({
      reply: "Something went wrong while contacting Mindora. Please try again.",
    });
  }
};

module.exports = { sendMessage };