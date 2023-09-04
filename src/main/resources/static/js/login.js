document.getElementById('login-btn').addEventListener('click', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
        alert('아이디와 비밀번호를 모두 입력해주세요.');
        event.preventDefault(); // Prevent form from submitting
    }
  });
