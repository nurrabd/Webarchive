package com.nur.Webarchivebackend.utility;
import com.nur.Webarchivebackend.model.Site;
import com.nur.Webarchivebackend.model.User;
import com.nur.Webarchivebackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;

@Component
public class DataIntilizer {
    @Autowired
   private  UserService userService;
    private Site site;


    @PostConstruct
    public void init() {
        System.out.println("is working");
        User user = new User();
        user.setEmail("nurhusein11@gmail.com");

        user.setPassword("1122");
        userService.register(user);
    }
}
