package com.nur.Webarchivebackend.service;

import com.nur.Webarchivebackend.Repository.SiteRepo;
import com.nur.Webarchivebackend.model.Site;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SiteService {



   @Autowired
   private SiteRepo siteRepo;

    public List<Site> getAll() {
        return siteRepo.findAll();
    }

    public void register(Site site){
        siteRepo.save(site);
    }


    public Site update(Site l, int id) {
      return new Site();

    }
}
