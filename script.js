const { OpenAI } = require('openai');

// Initialize OpenAI client with API key
const openai = new OpenAI({
  apiKey: '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',
});

// Function to get a chat completion response
async function getChatCompletion() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Write a haiku about recursion in programming.' }
      ]
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error fetching completion:', error);
  }
}

// Call the function to get the completion
getChatCompletion();
