package com.nur.Webarchivebackend.controller;
import com.nur.Webarchivebackend.model.User;
import com.nur.Webarchivebackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "all")
    public List<User> getAll(){
       return userService.getAll();
    }

    @PostMapping("/register")
    public String register(@RequestBody User user)  {
        userService.register(user);
        return "completed";
    }

    @PostMapping("/login")
    public User login(@RequestBody User user)  {
        return userService.login(user);
    }

    @GetMapping("/findUserById/{id}")
    public User getUserById(@PathVariable int id){

        return  userService.findUserById(id);
    }


}
