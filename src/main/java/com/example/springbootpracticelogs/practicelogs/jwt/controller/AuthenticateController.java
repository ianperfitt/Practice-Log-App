package com.example.springbootpracticelogs.practicelogs.jwt.controller;

import com.example.springbootpracticelogs.practicelogs.jwt.model.AuthenticationRequest;
import com.example.springbootpracticelogs.practicelogs.jwt.model.AuthenticationResponse;
import com.example.springbootpracticelogs.practicelogs.jwt.service.ApplicationUserDetailsService;
import com.example.springbootpracticelogs.practicelogs.jwt.util.JwtUtil;
import com.example.springbootpracticelogs.practicelogs.user.entity.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthenticateController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtTokenUtil;
    private final ApplicationUserDetailsService userDetailsService;

    @RequestMapping(value = "/authenticate")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthenticationResponse authenticate(@RequestBody AuthenticationRequest req) throws Exception {
        UserEntity user;
        try {
            user = userDetailsService.authenticate(
                    req.getEmail(), req.getPassword());
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        var userDetails = userDetailsService.loadUserByUsername(user.getEmail());
        System.out.println(userDetails);
        var jwt = jwtTokenUtil.generateToken(userDetails);
        return new AuthenticationResponse(jwt);
    }
}
