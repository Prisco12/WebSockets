document.addEventListener('DOMContentLoaded', function () {
  const socket = io('http://localhost:3000'); // Substitua 'localhost:3000' pelo seu endereço do servidor se necessário

  socket.on('connect', () => {
    console.log('Conectado ao servidor!');
  });

  socket.on('msgToClient', (message) => {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.textContent = `${message.username}: ${message.content}`;
    messages.appendChild(messageElement);
  });

  socket.on('getOldMessages', (messages) => {
    console.log('Mensagens antigas recebidas:', messages);
    const messagesElement = document.getElementById('messages');
    messages.forEach((message) => {
      const messageElement = document.createElement('li');
      messageElement.textContent = `${message.username}: ${message.message}`;
      messagesElement.appendChild(messageElement);
    })
  })

  document.getElementById('sendButton').addEventListener('click', function () {
    const username = document.getElementById('username').value 
    const messageInput = document.getElementById('messageInput');
    const message = {
      content: messageInput.value,
      username: username
    };
    socket.emit('msgToServer', message);
    messageInput.value = '';
  });
});
