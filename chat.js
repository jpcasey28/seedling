const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const messagesDiv = document.getElementById('messages');

sendBtn.addEventListener('click', async () => {
  const userText = input.value.trim();
  if (!userText) return;

  addMessage('You', userText);
  input.value = '';

  const response = await fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();
  addMessage('Seedling', data.reply);
});

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.textContent = `${sender}: ${text}`;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
