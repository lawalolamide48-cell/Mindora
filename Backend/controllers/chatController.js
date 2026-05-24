const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Please enter a message.",
      });
    }

    // Simulate thinking delay (feels like real AI)
    await new Promise((resolve) => setTimeout(resolve, 800));

    const msg = message.toLowerCase();

    let reply = "";

    // simple “AI-like” responses
    if (msg.includes("sad") || msg.includes("depressed")) {
      reply =
        "I'm really sorry you're feeling this way. I'm here with you. Do you want to talk about what's making you feel this way?";
    } else if (msg.includes("anxious") || msg.includes("stress")) {
      reply =
        "That sounds overwhelming. Try to take a slow breath. Want to talk about what's stressing you?";
    } else if (msg.includes("hello") || msg.includes("hi")) {
      reply = "Hello 💛 I'm Mindora. I'm here for you whenever you need to talk.";
    } else if (msg.includes("help")) {
      reply =
        "I'm here to help. Tell me what's going on, and we'll go through it together.";
    } else {
      // random supportive fallback
      const responses = [
        "I hear you. Tell me more about that.",
        "That sounds important. I'm listening.",
        "I'm here with you — go on.",
        "Thanks for sharing that with me.",
      ];

      reply =
        responses[Math.floor(Math.random() * responses.length)];
    }

    return res.json({ reply });
  } catch (error) {
    console.error("Mock AI error:", error);

    return res.status(500).json({
      reply: "Something went wrong.",
    });
  }
};

module.exports = { sendMessage };