package com.example.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Slf4j
@RequestMapping("/th/3ice")
public class LoginLogoutController {


    @GetMapping("/login")
    public void login(){
        log.info("GET/th/3ice/login");

    }

    @GetMapping("/logout")
    public void logout(){
        log.info("GET/th/3ice/logout");
    }

    }
