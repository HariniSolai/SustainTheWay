document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btntest").addEventListener("click", getChatCompletion);
});

async function getChatCompletion(event) {
  event.preventDefault(); // Prevents default form behavior

  document.getElementById("contentPrint").textContent = "Generating response...";

  try {
    const content = document.getElementById("searchContent").value;
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage: content }),
    });

    const data = await response.json();
    document.getElementById("contentPrint").textContent = data.response;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById("contentPrint").textContent = "Error fetching response.";
  }
}
