const settingsItems = document.querySelectorAll(".settingshref");
  const iceOptions = document.querySelectorAll(".ice_options");
  const closeItems2 = document.querySelectorAll(".close2");

  settingsItems.forEach((settingsItem, index) => {
    settingsItem.addEventListener("click", () => {
      toggleSettingsPage(index); // 해당 버튼을 클릭하면 해당 인덱스에 해당하는 .ice_options 요소를 토글
    });
  });

  closeItems2.forEach((closeItem, index) => {
    closeItem.addEventListener("click", () => {
      toggleSettingsPage(index); // 해당 닫기 버튼을 클릭하면 해당 인덱스에 해당하는 .ice_options 요소를 토글
    });
  });

  function toggleSettingsPage(index) {
    iceOptions[index].classList.toggle("active"); // 해당 인덱스의 .ice_options 요소를 토글
  }


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

const deleteButton = document.getElementById('delete-btn');
deleteButton.addEventListener('click', () => {
const url = 'http://localhost:8080/th/3ice/withdraw';
axios.get(url)
  .then(() => {
    window.location.href = url;
  })
  .catch((error) => {
    console.error('요청 실패:', error);
  });
});