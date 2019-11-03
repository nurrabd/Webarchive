package com.nur.Webarchivebackend.Repository;

import com.nur.Webarchivebackend.model.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepo extends JpaRepository<User, Integer> {
    User findByEmail(String email);
    User findByUserId(int id);

}

