package com.example.demo.domain.service;

import com.example.demo.domain.dto.MemberDto;
import com.example.demo.domain.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class withdrawService {


    // 회원 가입하기
    @Autowired
    private MemberMapper mapper;
    private final BCryptPasswordEncoder passwordEncoder;

    public int userJoin(MemberDto dto) throws Exception {
        String encryptedPassword = passwordEncoder.encode(dto.getPassword());
        dto.setPassword(encryptedPassword);
        dto.setRole("ROLE_User");
        log.info("MemberService's UserJoin");
        return mapper.insert(dto);
    }

    public int adminJoin(MemberDto dto) throws Exception{
        String encryptedPassword = passwordEncoder.encode(dto.getPassword());
        dto.setPassword(encryptedPassword);
        dto.setRole("ROLE_Admin");
        log.info("MemberService's MemberJoin");
        return mapper.insert(dto);
    }


    //회원 전체 조회
    public List<MemberDto> memberSearchAll() throws Exception {
        log.info("MemberService's memeber search all");
        return mapper.selectAll();
    }


    //회원 조회하기(한명)- 사서

    public MemberDto userSearchOne(String username) throws Exception {

        return mapper.select(username);
    }


    //회원 수정하기 -- 본인 확인

    public int UserUpdate(MemberDto dto) throws Exception {
        String encryptedPassword = passwordEncoder.encode(dto.getPassword());
        dto.setPassword(encryptedPassword);
        log.info("MemberServices; member Update");
        return mapper.update(dto);
    }

    //회원 삭제하기

    public int UserDelete(String username) throws Exception {
        log.info("MemberService's member Delete");
        return mapper.delete(username);
    }


}
