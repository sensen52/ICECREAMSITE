package com.example.demo.controller;

import com.example.demo.domain.dto.MemberDto;
import com.example.demo.domain.service.JoinService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/th/3ice")
@Slf4j
public class JoinController {

    @Autowired
    private JoinService service; // JoinService에 대한 의존성 주입

    // POST 요청을 처리하는 메서드
    @PostMapping("/join")
    public String addMember(@RequestBody MemberDto dto) {
        // 받은 데이터를 서비스로 전달하여 데이터베이스에 저장
        int result = service.memberJoin(dto); // service를 사용하여 memberJoin 메서드 호출
        if (result > 0) {
            return "회원 가입이 완료되었습니다.";
        } else {
            return "회원 가입에 실패하였습니다.";
        }
    }
}