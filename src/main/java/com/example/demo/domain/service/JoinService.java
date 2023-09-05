package com.example.demo.domain.service;

import com.example.demo.domain.dto.MemberDto;
import com.example.demo.domain.mapper.MemberMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class JoinService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    // 비밀번호 암호화 저장

    @Autowired
    private MemberMapper mapper;
    // 데이터베이스 연동

    public int memberJoin(MemberDto dto) {
        String encryptedPassword = passwordEncoder.encode(dto.getPassword());
        dto.setPassword(encryptedPassword);
        return mapper.insert(dto); // 데이터베이스에 저장 후 결과 반환
    }
}
