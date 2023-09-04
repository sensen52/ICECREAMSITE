package com.example.demo.domain.service;

import com.example.demo.domain.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class memberService {

    @Autowired
    private MemberMapper mapper;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void memberjoin(){

    }


    public void memberSearch(){

    }

    public void memberDelete(){

    }

    public void memberUpdate(){

    }


}
