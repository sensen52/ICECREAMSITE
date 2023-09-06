

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
const originalBackgroundURL = "./image/menu_kakao_img.png";
const hoverBackgroundURLs = [
  "./image/1698818148.png",
  "./image/1746498851.png",
  "./image/1746499595.png",
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

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: false,
});


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

// "withdraw-reason" 체크박스 요소 가져오기
const withdrawReasonCheckbox = document.getElementById("withdraw-reason");

// 텍스트 영역 요소 가져오기
const textareaWrapper = document.querySelector(".textarea-wrapper");

// 체크박스의 변경 이벤트에 대한 리스너 추가
withdrawReasonCheckbox.addEventListener("change", function () {
  // 체크박스가 선택되었는지 확인
  if (this.checked) {
    // 체크박스가 선택되면 텍스트 영역 표시
    textareaWrapper.style.display = "block";
  } else {
    // 체크박스가 선택되지 않았으면 텍스트 영역 숨김
    textareaWrapper.style.display = "none";
  }
});


document.getElementById("withdrawbtn").addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("정말로 회원 탈퇴하시겠습니까?")) {
            // DELETE 요청을 서버로 보냅니다.
            const username = document.getElementById("username").value;
            axios
            .delete("/th/3ice/withdraw", { data: { username } })
                .then((response) => {
                    // 회원 탈퇴가 성공한 경우 서버에서 반환하는 응답을 처리합니다.
                    console.log("회원 탈퇴 성공:", response.data);
                })
                .catch((error) => {
                    // 회원 탈퇴 실패 또는 오류가 발생한 경우 처리합니다.
                    console.error("회원 탈퇴 실패:", error);
                    alert("회원 탈퇴 실패. 다시 시도해주세요.");
                });
    }});


