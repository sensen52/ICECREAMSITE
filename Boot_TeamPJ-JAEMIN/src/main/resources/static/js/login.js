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



//login.addEventListener("click", function() {
//
//    axios.get("/th/3ice/login")
//    .then(response=>{
//    })
//    .catch(error=>{console.log(error)})
//  });
// 로그인 버튼
//document.addEventListener('DOMContentLoaded', function() {
//  const login = document.getElementById("login-btn");
//  if (login) {
//    login.addEventListener('click', function() {
//    axios.get("/th/3ice/login")
//        .then(response=>{
//        if(response.status === 200){
//        window.location.href = response.data.redirectUrl;
//        }
//        })
//        .catch(error=>{console.log(error)})
// })
//};


// 회원가입
//document.addEventListener('DOMContentLoaded', function() {
  const register_btn = document.getElementById("register");
  if (register_btn) {
    register_btn.addEventListener('click', function() {
    axios.get("/th/3ice/join")
        .then(response=>{
        if(response.status === 200){
        const redirectUrl = "/th/3ice/join";
        window.location.replace(redirectUrl);
        }
        })
        .catch(error=>{console.log(error)})
 })
};

// 카카로 로그인
//document.addEventListener('DOMContentLoaded', function() {
  const kakao_login = document.getElementById("kakao-login");
  if (kakao_login) {
    kakao_login.addEventListener('click', function() {
    console.log("clicked...");
    axios.get("/th/kakao/getCode")
        .then(response=>{
        if(response.status === 200){
        window.location.href = response.data.redirectUrl;
        }
        })
        .catch(error=>{console.log(error)})
 })
};
