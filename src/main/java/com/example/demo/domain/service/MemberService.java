package com.example.demo.domain.service;

import com.example.demo.domain.dto.MemberDto;
import com.example.demo.domain.mapper.MemberMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class MemberService {

    @Autowired
    private MemberMapper mapper;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public void memberSearch(){

    }

    public void memberDelete(){

    }

    public int memberUpdate(MemberDto dto) throws Exception {
        log.info("service 문제" + dto.toString());
        return mapper.update(dto);

    }
    public String getPasswordByUsername(String username) throws Exception {
        return mapper.selectPassword(username);
    }





}
