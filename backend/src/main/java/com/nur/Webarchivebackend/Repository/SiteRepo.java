package com.nur.Webarchivebackend.Repository;

import com.nur.Webarchivebackend.model.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SiteRepo extends JpaRepository<User, Integer> {
    @Override
    <S extends User> boolean exists(Example<S> example);
}

