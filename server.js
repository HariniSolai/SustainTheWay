// backend, to protect API key and sercure requests 
const express = require('express');
const OpenAI = require('openai');
const cors = require('cors'); 
require('dotenv').config(); // gets the API from the environment variables 

const app = express();
app.use(express.json());
app.use(cors());

// stores API key in an .env file for security 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

//sending the request from the user's input to openai 
app.post('/api/chat', async (req, res) => {
  try {
    const { userMessage } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant, answering questions about food, farming and agriculture. ' },  
        { role: 'user', content: userMessage },
      ],
    });

    //recived a valid response 
    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    //recived an error 
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

//setting up the port that the server is listening on 
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
