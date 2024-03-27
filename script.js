document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const credentials = {
      login: 'admin',
      password: 'qwerty',
    };
  
    if (username === credentials.login && password === credentials.password) {
      showMessage('success', 'Welcome, admin!');
    } else {
      showMessage('error', 'Invalid username or password.');
    }
  });
  
  function showMessage(type, message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
  }
  