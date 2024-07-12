document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const messageInput = document.getElementById('message');
      const responseDiv = document.getElementById('response');
  
      try {
        const response = await axios.post('/process/answering', {
          text: messageInput.value
        });
   
        responseDiv.innerHTML = `<p>🤖 : ${response.data.answer}</p>`;
        messageInput.value = '';
      } catch (error) {
        console.error('Error processing the text:', error);
        responseDiv.innerHTML = `<p>Error processing the text. Please try again.</p>`;
      }
    });
});
  