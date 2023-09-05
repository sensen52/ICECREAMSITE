package com.example.demo.controller;

import com.example.demo.domain.dto.MemberDto;
import com.example.demo.domain.service.withdrawService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@Slf4j
@RequestMapping("/th/3ice")
public class MainController {
    @Autowired
    private withdrawService service;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/index")
    public void index() {
        log.info("Get/th/3ice/index");
    }

    @GetMapping("/join")
    public void join() {
        log.info("Get/th/3ice/join");
    }

    @PostMapping("/join")
    public String join(@ModelAttribute MemberDto memberDto) throws Exception {
        System.out.println("memberDto: " + memberDto);
        service.userJoin(memberDto);
        return "index";
    }

    @GetMapping("/myPage")
    public void myPage() {
        log.info("Get/th/3ice/myPage");
    }

    @GetMapping("/update")
    public void update() {
        log.info("Get/th/3ice/update");
    }

    @GetMapping("/withdraw")
    public void withdrawPage() {
        log.info("Get/th/3ice/withdraw");
    }

//    @PostMapping("/withdraw")
//    public String deleteWithdraw(@ModelAttribute("username") String username) throws Exception {
//
//        log.info("DELETE /th/3ice/withdraw - username: {}", username);
//        service.UserDelete(username);
//        return "index";
//    }


    @PostMapping("/withdraw")
    public String withdraw() throws Exception{
        // 사용자 아이디(username) 가져오기
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        log.info("username: " + username);
        service.UserDelete(username);
        // TODO: username을 사용하여 회원 탈퇴 처리 로직 수행

        // 회원 탈퇴 후 로그아웃 처리 (선택적)
        SecurityContextHolder.clearContext();

        return "redirect:/logout"; // 로그아웃 페이지로 이동
    }

}