
  document.getElementById('addButton').addEventListener('click', function() {
    var button = document.createElement('button');
    button.classList.add('Button');
    button.textContent = generateRandomMessage();
    button.style.color = generateRandomColor();
    document.getElementById('buttonContainer').appendChild(button);
    setTimeout(function() { button.remove();}, 3000);
  });
  
  function generateRandomMessage() {
    var messages = ['Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message 5', 'Message 6', 'Message 7', 'Message 8', 'Message 9'];
    var randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
  
  function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }