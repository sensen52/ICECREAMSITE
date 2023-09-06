//dropdown메뉴
document.addEventListener("DOMContentLoaded", function () {
  var mainNavItems = document.querySelectorAll(".main_nav >li");

  mainNavItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      this.classList.add("active");
    });

    item.addEventListener("mouseleave", function () {
      this.classList.remove("active");
    });
  });
});

//dropdown메뉴 이미지 교차화면
const subNavItems = document.querySelectorAll(".main_nav > li");
const originalBackgroundURL = "/image/menu_kakao_img.png";
const hoverBackgroundURLs = [
  "/image/1698818148.png",
  "/image/1746498851.png",
  "/image/1746499595.png",
];
let currentBackgroundIndex = 0;

function handleBackgroundFadeIn(event) {
  const subNavItem = event.currentTarget;
  const subNavImg = subNavItem.querySelector("a.sub_nav_img");
  subNavImg.style.backgroundImage = `url("${hoverBackgroundURLs[currentBackgroundIndex]}")`;
}

function handleBackgroundFadeOut(event) {
  const subNavItem = event.currentTarget;
  const subNavImg = subNavItem.querySelector("a.sub_nav_img");
  subNavImg.style.backgroundImage = `url("${originalBackgroundURL}")`;
}

subNavItems.forEach((subNavItem) => {
  subNavItem.addEventListener("mouseenter", handleBackgroundFadeIn);
  subNavItem.addEventListener("mouseleave", handleBackgroundFadeOut);

  const subNavImg = subNavItem.querySelector("a.sub_nav_img");
  subNavImg.style.backgroundImage = `url("${hoverBackgroundURLs[currentBackgroundIndex]}")`;
});
function toggleBackgroundImage() {
  currentBackgroundIndex =
    (currentBackgroundIndex + 1) % hoverBackgroundURLs.length;
  subNavItems.forEach((subNavItem) => {
    const subNavImg = subNavItem.querySelector("a.sub_nav_img");
    subNavImg.style.backgroundImage = `url("${hoverBackgroundURLs[currentBackgroundIndex]}")`;
  });
}

setInterval(toggleBackgroundImage, 4000);

//창열고 닫기 이벤트--------------------
const closeItems = document.querySelectorAll(".close");
const searchPages = document.querySelectorAll(".search_page");
const searchItems = document.querySelectorAll(".search_icon");

// 각 검색 아이콘에 클릭 이벤트 리스너 추가
searchItems.forEach((searchItem) => {
  searchItem.addEventListener("click", function () {
    // 각 해당 검색 페이지에 "active" 클래스 추가
    searchPages.forEach((searchPage) => {
      searchPage.classList.add("active");
    });
  });
});

// 각 닫기 버튼에 클릭 이벤트 리스너 추가
closeItems.forEach((closeItem) => {
  closeItem.addEventListener("click", function () {
    // 각 해당 검색 페이지에서 "active" 클래스 제거
    searchPages.forEach((searchPage) => {
      searchPage.classList.remove("active");
    });
  });
});



// 로고 버튼
const logo_btn=document.querySelector(".logo");
logo_btn.addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작인 페이지 이동을 막아줍니다.
  axios.get("/th/3ice/index")
      .then((response)=>{
        if(response.status===200){
          window.location="/th/3ice/index";
        }
      })
      .catch(error=>{
        console.log(error);
      })
});

// 장바구니버튼
const shopping_basket = document.querySelector(".basket_icon");



// 체크박스 관련 코드
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

// 아이디 입력 검열
document.getElementById("username").addEventListener("input", function(event) {
    var inputValue = event.target.value;
    if (/[^a-zA-Z0-9]/.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        alert("아이디는 영어와 숫자만 입력 가능합니다.");
    }
});

// 비밀번호 입력 검열
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

// 생년월일 입력 형식 변환
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

// 비밀번호 확인 일치 여부 표시
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

// 로그인 버튼 클릭 이벤트 처리
const loginBtn = document.querySelector(".logout");
loginBtn.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작인 페이지 이동을 막아줍니다.
    axios.get("/th/3ice/login")
        .then((response)=>{
            if(response.status===200){
                window.location.replace("/th/3ice/login");
            }
        })
        .catch(error=>{
            console.log(error);
        })
});

// 마이페이지 버튼 클릭 이벤트 처리
const mypage_btn = document.querySelector(".mypage");
mypage_btn.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작인 페이지 이동을 막아줍니다.
    axios.get("/th/3ice/myPage")
        .then((response)=>{
            if(response.status===200){
                window.location.replace("/th/3ice/myPage");
            }
        })
        .catch(error=>{
            console.log(error);
        })
});

//가입하기 버튼 클릭 시 axios 데이터 전송
const btnJoin = document.getElementById("btnJoin");
btnJoin.onclick = function () {
    //주소
    var postNumber = document.getElementById("addr").value;
    var address = document.getElementById("address").value;
    var extraAddress = document.getElementById("extraAddress").value;
    var detailAddress = document.getElementById("detailAddress").value;
    //기타 회워정보
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var birth = document.getElementById("birthdate").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // 주소합병
    var fullAddress = postNumber + " " + address + " " + extraAddress + " " + detailAddress;

    //이메일합병
    var emailInput = document.getElementById("email-input").value;
    if (emailInput) { // 이메일 입력값이 비어있지 않은 경우에만 처리
        var emailSelect = document.getElementById("domain-list").value;
        var fullEmail = emailInput + "@" + emailSelect;
    }

    // 요청 본문 데이터 객체 생성(db들어갈 내용과 같음)
    const requestData = {
    addr: fullAddress,
       email: fullEmail,
        password: password,
        username: username,
        name: name,
        birthday: birth,
        phoneNumber: phoneNumber
    };

    axios.post('/th/3ice/join', requestData) // 요청 본문에 데이터 객체 전달
        .then(response => {

            console.log(response.data);
            window.location.href="/th/3ice/login";

        })
        .catch(error => {
            console.error("Error sending data: ", error);
        });
}