package com.example.demo.controller;

import com.example.demo.domain.service.withdrawService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j
@RequestMapping("/th2/3ice")
public class withdraw2Controller {

    @Autowired
    withdrawService service;

    @GetMapping("/withdraw2")
    public String userWithdraw1() {
        log.info("GET /th/3ice/withdraw2jsp");
        return "th2/3ice/withdraw2"; // JSP 파일의 경로와 이름을 반환합니다.
    }



    // 세션에서 username을 가져와서 삭제하는 핸들러
    @DeleteMapping("/withdraw2")
    public ResponseEntity<String> delete(@RequestParam("username") String username) {
        try {
            // 회원 탈퇴 로직을 구현하고 성공하면 OK 응답을 반환합니다.
            service.UserDelete(username);
            return new ResponseEntity<>("회원 탈퇴 성공", HttpStatus.OK);
        } catch (Exception e) {
            // 회원 탈퇴 실패 또는 오류가 발생한 경우 Bad Request 응답을 반환합니다.
            return new ResponseEntity<>("회원 탈퇴 실패: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
