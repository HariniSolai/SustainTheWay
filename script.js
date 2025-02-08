//initializing and setting up the API 
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btntest").addEventListener("click", getChatCompletion);
});

async function getChatCompletion(event) {
  event.preventDefault(); // Prevents default form behavior

  //giving updates to the user 
  document.getElementById("contentPrint").textContent = "Generating response . . .";

  try {
    //getting the search query the user typed in 
    const content = document.getElementById("searchContent").value;
    //sending the query to openai __> this is done through connecting to the server set up in server.js 
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage: content }),
    });

    //getting the response from openai and printing it 
    const data = await response.json();
    document.getElementById("contentPrint").textContent = data.response;
  } catch (error) {
    //if there was an error
    console.error('Error:', error);
    document.getElementById("contentPrint").textContent = "Error fetching response.";
  }
}
