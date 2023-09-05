package com.example.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/th/3ice")
public class LoginLogoutController {

    @GetMapping("/join")
    public void join() {

        log.info("Get/th/3ice/join");

    }

    @GetMapping("/login")
    public void login(){
        log.info("GET/th/3ice/login");
    }


}
