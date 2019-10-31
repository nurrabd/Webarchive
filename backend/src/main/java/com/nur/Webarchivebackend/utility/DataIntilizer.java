package com.nur.Webarchivebackend.utility;

import com.nur.Webarchivebackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
@Component
public class DataIntilizer {


    @PostConstruct
    public void init() {
        System.out.println("is working");

    }
    }
