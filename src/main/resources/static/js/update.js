// 휴대폰번호 인징
const check_phone = document.getElementById("number").addEventListener('click', function(event) {
    let phoneNumberRegex = /^\d{10,11}$/;
    let phoneNumber = document.getElementById('phoneNumber').value;
    if (!phoneNumberRegex.test(phoneNumber)) {
        alert("올바른 휴대폰 번호를 입력해주세요.");
        event.preventDefault(); // Prevent form from submitting
    }
});


// 비밀번호 확인


// 확인하기 버튼
const done_btn = document.getElementById("done").addEventListener('click', function(event) {
    var username = document.getElementById('id').value;
    var password = document.getElementById('cur_pass').value;
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value + '@' + document.getElementById('email1').value; // 이메일 합치기
    var address = document.getElementById('address').value; // 주소 값 불러오기

    var detailAddress = document.getElementById('detailAddress').value; // 상세주소 값 불러오기
    var extraAddress =  document.getElementById('extraAddress').value; // 참고항목 값 불러오기
    let addr = `${address}, ${detailAddress}, ${extraAddress}`;
    addr = addr.replace(/,/g, "");
    var birthday = document.getElementById('birth').value;

   axios.post('/th/3ice/req_update', {
       username: username,
       password: password,
       name: name,
       phoneNumber: phoneNumber,
       email: email,
       addr: addr,
       birthday:birthday
   })
   .then(function (response) {
      if(response.data.msg === "수정 완료") {
         alert("수정 완료");
      }
   })
   .catch(function (error) {
      console.log(error);
      alert("오류가 발생하였습니다. 다시 시도해주세요.");
   });
});







 document.getElementById('check').addEventListener('click', function() {
    var username = document.getElementById('id').value;
    var password = document.getElementById('cur_pass').value;

    axios.post('http://localhost:8080/th/3ice/passwordCheck', {

            username: username,
            password: password

    })
    .then(function (response) {
        if(response.data.msg === "비밀번호가 일치하지 않습니다.") {
            alert("비밀번호가 일치하지 않습니다.");
        } else if(response.data.msg === "비밀번호 확인 완료") {
            alert("비밀번호 확인 완료");
        }
    })
    .catch(function (error) {
        console.log(error);
        alert("오류가 발생하였습니다. 다시 시도해주세요.");
    });
});


const check_birthday = document.getElementById("birth").addEventListener('blur', function(event) {
    let birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
    let birthday = document.getElementById('birth').value;
    if (!birthdayRegex.test(birthday)) {
        alert("올바른 생년월일을 입력해주세요 (YYYY-MM-DD).");
      event.target.value = ''; // 입력값 초기화
    }
});
