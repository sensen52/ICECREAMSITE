// 이동하기 axios

//회원정보수정으로
const updateBtn = document.getElementById('update-btn');


updateBtn.addEventListener('click', () => {
    axios.get('http://localhost:8080/th/3ice/update')
        .then(response => {
            window.location.href = response.config.url;
        })
        .catch(error => {
            console.error('에러 발생:', error);
        });
});

//회원탈퇴로 이동
const deleteButton = document.getElementById('delete-btn');
  deleteButton.addEventListener('click', () => {
    const url = 'http://localhost:8080/th/3ice/withdraw';
    axios.get(url)
      .then(() => {
        window.location.href = url;
      })
      .catch((error) => {
        console.error('삭제 실패:', error);
      });
  });