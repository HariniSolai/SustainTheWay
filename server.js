// server.js (Node.js Backend)
const express = require('express');
const OpenAI = require('openai');
const cors = require('cors'); // Enable CORS for frontend requests
require('dotenv').config(); // Load API key from .env file

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store API key in an .env file (security best practice)
});

app.post('/api/chat', async (req, res) => {
  try {
    const { userMessage } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
