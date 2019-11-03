package com.nur.Webarchivebackend.service;

import com.nur.Webarchivebackend.Repository.UserRepo;
import com.nur.Webarchivebackend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {



   @Autowired
   private UserRepo userRepo;

    public List<User> getAll() {
     //  userRepo.findByEmail("nurhusein@gmail.com");
        System.out.println(userRepo.findByEmail("nurhusein11@gmail.com").getEmail());
        return userRepo.findAll();
    }

    public void register(User user){
        userRepo.save(user);
    }

    public User login(User user){
        User newUser = userRepo.findByEmail(user.getEmail());
                if(newUser.getPassword().equals(user.getPassword())){
                    return newUser;
                }
                return null;
    }

    public User findUserById(int id){
        return userRepo.findByUserId(id);
    }

}
