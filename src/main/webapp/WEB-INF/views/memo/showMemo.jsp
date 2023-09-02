<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- JSTL 연결 -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Axios Cdn -->


<!DOCTYPE html>
<html>
<head>
<!-- Axios Cdn -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"
	integrity="sha512-uMtXmF28A2Ab/JJO2t/vYhlaa/3ahUOgj1Zf27M5rOo8/+fcTUVH0/E0ll68njmjrLqOBjXM3V9NiPFL5ywWPQ=="
	crossorigin="anonymous" referrerpolicy="no-referrer">
</script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>ShowMemo</h1>
	<div class="showMemo">
	<c:forEach items="${list }" var="dto">
	<a href="javascript:void(0)" class="memo">
	<span>${dto.id }</span> &nbsp;&nbsp;<span>${dto.text }</span>
	</a>
	&nbsp;&nbsp;&nbsp;
	<a href="javascript:void(0)" class="delete" data-id="${dto.id }">X</a><br/>
	</c:forEach>
	</div>
	<hr>
	<h1>Post Memo</h1>
	<div class="postMemo">
		<form onsubmit="return false" name="post_form">
			<textarea name="postArea"></textarea>
			<button class="post_btn">POST</button>
		</form>
	</div>
	<hr>
		<h1>Update Memo</h1>
	<div class="updateMemo">
		<form onsubmit="return false" name="update_form">
			<input name="updateId" disabled ><br>
			<textarea name="updateArea"></textarea>
			<button class="update_btn">POST</button>
		</form>
	</div>

<script>
	// Post Memo
	const post_btn_el=document.querySelector(".post_btn");

	post_btn_el.addEventListener("click",function(){
		console.log("post_btn_el clicked!!");
		const postArea_el = document.post_form.postArea;
		console.log("area's value : ",postArea_el.value)

		// 작성한 파라미터
		var params1 = { text: postArea_el.value}
		// 컨테츠 타입 설정
		var axiosConfig = {headers :{"Content-Type":"application/json"}};
		// 접속할 URL
		var url1="http://localhost:8080/memo/add";

		axios.post(url1,params1,axiosConfig)
		.then(response=>{
			alert("memo add SUCCESS!!" , response);
			location.reload();
		})
		.catch(error=>{
			alert("Memo Add Fail!!" , error);
		})


	})

	// update Memo
	const memo_els = document.querySelectorAll(".memo");
	memo_els.forEach((memo_el)=>{

		memo_el.addEventListener("click",function(){
			console.log("memo clicked.." , memo_el.children[1].innerHTML);
			const form=document.update_form;
			form.updateId.value=memo_el.children[0].innerHTML;
			form.updateArea.value=memo_el.children[1].innerHTML;
		})
	})

	const update_btn_el=document.querySelector(".update_btn");

	update_btn_el.addEventListener("click",function(){
		console.log("update_btn_el clicked!!");

		var url2="http://localhost:8080/memo/put2";
		const updateArea_el=document.update_form.updateArea;
		const updateId_el=document.update_form.updateId;
		var axiosConfig1 = {headers :{"Content-Type":"application/json"}};
		var param2 ={id:updateId_el.value ,text:updateArea_el.value};

		axios.put(url2,param2,axiosConfig1)
		.then(response=>{
			alert("update Success!" , response);
			location.reload();
		})
		.catch(error=>{
			alert("update Fail..", error)
		})


	})

	const delete_els = document.querySelectorAll(".delete");
	delete_els.forEach((delete_btn)=>{

		delete_btn.addEventListener("click",function(){
			console.log("delete_btn clicked!!");
			const id = delete_btn.getAttribute("data-id");
			var url3="http://localhost:8080/memo/remove/"+id;
			var axiosConfig2 = {headers :{"Content-Type":"application/json"}};


			axios.delete(url3,axiosConfig2)
			.then(response=>{
				alert("delete Success!",response);
				location.reload();
			})
			.catch(error=>{
				alert("delete Failed!",error)
			})
	})

	})
</script>


</body>
</html>