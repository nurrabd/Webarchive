package com.nur.Webarchivebackend.service;

import com.nur.Webarchivebackend.Repository.SiteRepo;
import com.nur.Webarchivebackend.model.Site;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SiteService {



   @Autowired
   private SiteRepo siteRepo;

    public List<Site> getAll() {

        return siteRepo.findAll();
    }

    public void register(Site site){
       // if(user.getEmail().equals(userRepo.findAll().forEach();)){

        //}

        siteRepo.save(site);

    }




}
