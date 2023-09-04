package com.example.demo.domain.dto;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto{ 

	private String username;
	private String password;
	private String name;
	private String birthday;
	private String phoneNumber;
	private String email;
	private String addr;
	private String role;


}
