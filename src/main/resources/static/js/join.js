const checkboxes = document.querySelectorAll('.checkcheck');
const allCheck = document.querySelector('.allcheck'); // cb0 체크박스


allCheck.addEventListener('change', () => {
    const isChecked = allCheck.checked;
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    updateSectionsDisplay();
});

const sectionsToHide = document.querySelectorAll('section:nth-of-type(2), section:nth-of-type(3), section:nth-of-type(4)');

function updateSectionsDisplay() {
    const checkedCount = document.querySelectorAll('.checkcheck:checked').length;
    if (checkedCount >= 3) {
        sectionsToHide.forEach(section => {
            section.style.display = 'block';
        });
        const secondSection = document.querySelector('section:nth-of-type(2)');
        if (secondSection) {
            const topOffset = secondSection.offsetTop;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    } else {
        sectionsToHide.forEach(section => {
            section.style.display = 'none';
        });
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        updateSectionsDisplay();
    });
});

// 초기 로드 시 실행
updateSectionsDisplay();


// 상자내용물검열


document.getElementById("username").addEventListener("input", function(event) {
    var inputValue = event.target.value;
    if (/[^a-zA-Z0-9]/.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        alert("아이디는 영어와 숫자만 입력 가능합니다.");
    }
});

var passwordInput = document.getElementById("password");
var passwordConfirmInput = document.getElementById("passwordConfirm");

function restrictInputToAllowedCharacters(inputElement) {
    inputElement.addEventListener("input", function(event) {
        var inputValue = event.target.value;
        var cleanedValue = inputValue.replace(/[^a-zA-Z0-9*^!]/g, '');
        event.target.value = cleanedValue;
    });
}

restrictInputToAllowedCharacters(passwordInput);
restrictInputToAllowedCharacters(passwordConfirmInput);

document.getElementById("birthdate").addEventListener("input", function(event) {
    var inputValue = event.target.value;
    // 입력된 값에서 숫자만 추출하여 6자리로 제한
    var cleanedValue = inputValue.replace(/[^\d]/g, '').slice(0, 6);
    // YYMMDD 형식으로 변환
    if (cleanedValue.length >= 4) {
        var formattedValue = cleanedValue.replace(/(\d{2})(\d{2})(\d{2})/, '$1/$2/$3');
        event.target.value = formattedValue;
    } else {
        event.target.value = cleanedValue;
    }
});


var passwordInput = document.getElementById("password");
var passwordConfirmInput = document.getElementById("passwordConfirm");

passwordConfirmInput.addEventListener("input", function(event) {
    var passwordValue = passwordInput.value;
    var passwordConfirmValue = event.target.value;

    if (passwordValue === passwordConfirmValue) {
        event.target.style.backgroundColor = "#C4FFC1"; // 일치하면 초록색으로 변경
        setTimeout(function() {
            event.target.style.backgroundColor = ""; // 일치한 후 1초 뒤에 원래 색상으로 복원
        }, 1000);
    } else {
        event.target.style.backgroundColor = ""; // 불일치 시 원래 색상으로 복원
    }
});


// 로그인 버튼
const login_btn = document.querySelector(".logout");
login_btn.addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작인 페이지 이동을 막아줍니다.
  axios.get("/th/3ice/login")
      .then((response)=>{
        if(response.status===200){
          window.location="/th/3ice/login";
        }
      })
      .catch(error=>{
        console.log(error);
      })
});

// 마이페이지 버튼
const mypage_btn = document.querySelector(".mypage");
mypage_btn.addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작인 페이지 이동을 막아줍니다.
  axios.get("/th/3ice/myPage")
      .then((response)=>{
        if(response.status===200){
          window.location="/th/3ice/myPage";
        }
      })
      .catch(error=>{
        console.log(error);
      })

   //----------------------------------------------

//주소

    const btnJoin = document.getElementById("btnJoin");
    btnJoin.onclick = function () {
    var postNumber = document.getElementById("postNumber").value;
    var address = document.getElementById("address").value;
    var extraAddress = document.getElementById("extraAddress").value;
    var detailAddress = document.getElementById("detailAddress").value;

    var fullAddress = postNumber + " " + address + " " + extraAddress + " " + detailAddress;


    var emailInput = document.getElementById("email-input").value;
    if (emailInput) { // 이메일 입력값이 비어있지 않은 경우에만 처리
        var emailSelect = document.getElementById("domain-list").value;
        var fullEmail = emailInput + "@" + emailSelect;

        document.getElementById("email").value = fullEmail;
        console.log(fullEmail);
    }
}
// "가입" 버튼 클릭 이벤트 처리
btnJoin.onclick = async function () {
  const postNumber = document.getElementById("postNumber").value;
  const address = document.getElementById("address").value;
  const extraAddress = document.getElementById("extraAddress").value;
  const detailAddress = document.getElementById("detailAddress").value;
  const emailInput = document.getElementById("email-input").value;
  const emailSelect = document.getElementById("domain-list").value;

  // 주소와 이메일 데이터를 객체로 만들기
  const data = {
    postNumber,
    address,
    extraAddress,
    detailAddress,
    email: emailInput + "@" + emailSelect
  };

  try {
    // Axios를 사용하여 POST 요청 보내기
    const response = await axios.post("/th/3ice/join", data);

    // 서버 응답 처리
    console.log(response.data); // 서버에서 전달한 응답 확인

    // 필요한 작업 수행 (예: 회원 가입 성공 메시지 표시)
  } catch (error) {
    console.error("POST 요청 실패:", error);
    // 오류 처리 (예: 오류 메시지 표시)
  }
};



});