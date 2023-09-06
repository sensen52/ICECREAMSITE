package com.example.demo.controller;

import com.example.demo.domain.dto.MemberDto;

import com.example.demo.domain.service.MemberService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
@Slf4j
@RequestMapping("/th/3ice")
public class MainController {

//    @Autowired
////    private withdrawService service;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private final MemberService memberService;

    @Autowired
    public MainController(MemberService memberService) {
        this.memberService = memberService;
    }


    @GetMapping("/index")
    public void index(){
        log.info("Get/th/3ice/index");
    }


    @GetMapping("/join")
    public void join() {
        log.info("Get/th/3ice/join");
    }

    @GetMapping("/myPage")
    public void myPage() {
        log.info("Get/th/3ice/myPage");
    }

    @GetMapping("/update")
    public void update(){


        log.info("Get/th/3ice/update");
    }



    @PostMapping("/passwordCheck")
    public ResponseEntity<?> passwordCheck(@RequestBody Map<String, String> data) {

        String username = data.get("username");
        String password = data.get("password");

        Map<String, Object> response = new HashMap<>();

        log.info(username+" "+password);
        try {
            String hashedPassword = memberService.getPasswordByUsername(username);

            if (hashedPassword == null) {
                response.put("msg", "해당하는 사용자 이름의 계정이 존재하지 않습니다.");
                return new ResponseEntity<>(response, HttpStatus.OK);
            }

            try {
                if (!passwordEncoder.matches(password, hashedPassword)) {
                    response.put("msg", "비밀번호가 일치하지 않습니다.");
                    return new ResponseEntity<>(response, HttpStatus.OK);
                }
            } catch (IllegalArgumentException e) {
                response.put("msg", "비밀번호 확인 중 오류가 발생하였습니다.");
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }

            response.put("msg", "비밀번호 확인 완료");

        } catch (Exception e) {
            e.printStackTrace();
            response.put("msg", "오류가 발생하였습니다. 다시 시도해주세요.");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/req_update")
    public ResponseEntity<Map<String, Object>> updateUser(@Valid @RequestBody MemberDto dto, BindingResult bindingResult) {
        Map<String, Object> response = new HashMap<>();

        if (bindingResult.hasErrors()) {
            for (FieldError error : bindingResult.getFieldErrors()) {
                System.out.println(error.getField() + ": " + error.getDefaultMessage());
                response.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        try {
            // Get the plain text password from the DTO and encrypt it.
            String plainPassword = dto.getPassword();
            String encryptedPassword = passwordEncoder.encode(plainPassword);

            // Set the encrypted password back to the DTO.
            dto.setPassword(encryptedPassword);

            memberService.memberUpdate(dto);

            response.put("msg", "수정 완료");
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            response.put("msg", "오류가 발생하였습니다. 다시 시도해주세요.");

            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




    @GetMapping("/withdraw")
    public void withdraw(){
        log.info("Get/th/3ice/withdraw");
    }


    @GetMapping("/session-data-endpoint")
    public ResponseEntity<Map<String, Object>> getSessionData(HttpSession session) {
        Map<String, Object> sessionData = new HashMap<>();
        sessionData.put("username", session.getAttribute("username"));
        return ResponseEntity.ok(sessionData);
    }





//    @PostMapping("/withdraw")
//    public String withdraw() throws Exception {
//        // 사용자 아이디(username) 가져오기
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String username = authentication.getName();
//        log.info("username: " + username);
//        service.UserDelete(username);
//        // TODO: username을 사용하여 회원 탈퇴 처리 로직 수행
//
//        // 회원 탈퇴 후 로그아웃 처리 (선택적)
//        SecurityContextHolder.clearContext();
//
//        return "redirect:/logout"; // 로그아웃 페이지로 이동
//    }

//    @GetMapping("/session-data-endpoint")
//    public ResponseEntity<Map<String, Object>> getSessionData(HttpSession session) {
//        Map<String, Object> sessionData = new HashMap<>();
//        sessionData.put("username", session.getAttribute("username"));
//        return ResponseEntity.ok(sessionData);
//    }



}


