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

      Site site = siteRepo.findBySiteId(id);
      site.setColor(l.getColor());
      site.setDescription(l.getDescription());
      site.setUrl(l.getUrl());
      System.out.println(site.getSiteId());
      return siteRepo.save(site);


    }


    public String delete(int id) {
        System.out.println(id);
        siteRepo.deleteById(id);
        return ";";
    }

    public Site findSiteById(int id){
        return siteRepo.findBySiteId(id);
    }

}
