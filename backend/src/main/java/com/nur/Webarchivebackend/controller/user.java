package com.nur.Webarchivebackend.controller;
import com.nur.Webarchivebackend.model.User;
import com.nur.Webarchivebackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/")
public class user {

    @Autowired
    private UserService userService;

    @GetMapping(path = "all")
    public List<User> getAll(){
       return userService.getAll();
    }

    @PostMapping("/register")
    public String login(@RequestBody User user)  {
        userService.register(user);

    return "completed";
    }



}
