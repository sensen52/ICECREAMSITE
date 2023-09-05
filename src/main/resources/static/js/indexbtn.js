///**@charset "UTF-8";
// *
// */
//
//
//	const baseURL = "http://localhost:8080/th/3ice/";
//	let pagePath = null;
//	let fullURL = null;
//	const joinjoin = document.getElementById("registb");
//
//    joinjoin.addEventListener("click",function(){
//        axios.get("/th/3ice/join")
//              .then(response => {
//                if (response.status === 200) {
//                  // 로그인 폼을 페이지에 추가하거나 모달로 표시하는 등의 처리
//                  // response.data를 활용하여 로그인 폼을 조작
//                  window.location.href = "/th/3ice/join";
//                }
//              })
//              .catch(error => {
//                console.error('Error:', error);
//              });
//    });
//
//    	const withdrawwithdraw = document.getElementById("withdrawb");
//
//        withdrawwithdraw.addEventListener("click",function(){
//            axios.delete("/th/3ice/withdraw")
//                  .then(response => {
//                    if (response.status === 200) {
//                      // 로그인 폼을 페이지에 추가하거나 모달로 표시하는 등의 처리
//                      // response.data를 활용하여 로그인 폼을 조작
//                      window.location.href = "/th/3ice/withdraw";
//                    }
//                  })
//                  .catch(error => {
//                    console.error('Error:', error);
//                  });
//        });
