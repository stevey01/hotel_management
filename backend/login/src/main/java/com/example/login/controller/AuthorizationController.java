package com.example.login.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/resource")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class AuthorizationController {
    @GetMapping
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Here is your resource");
    }
}
