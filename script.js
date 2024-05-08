document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const changeButton = document.getElementById('changeButton');
  
    changeButton.addEventListener('click', () => {
      const newMessage = 'Mensagem alterada com sucesso!';
      messageElement.textContent = newMessage;
    });
  });
  