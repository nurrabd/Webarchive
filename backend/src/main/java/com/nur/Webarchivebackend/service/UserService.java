package com.nur.Webarchivebackend.service;

import com.nur.Webarchivebackend.Repository.UserRepo;
import com.nur.Webarchivebackend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class UserService {



   @Autowired
   private UserRepo userRepo;

    public List<User> getAll() {

        return userRepo.findAll();
    }

    public void register(User user){
       // if(user.getEmail().equals(userRepo.findAll().forEach();)){

        //}

        userRepo.save(user);

    }




}
