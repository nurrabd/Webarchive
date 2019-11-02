package com.nur.Webarchivebackend.controller;

import com.nur.Webarchivebackend.model.Site;
import com.nur.Webarchivebackend.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/site")
public class SiteController {

    @Autowired
    private SiteService siteService;

    @GetMapping(path = "all")
    public List<Site> getAll(){

        return siteService.getAll();
    }

    @PostMapping("/register")
    public String login(@RequestBody Site site)  {
        siteService.register(site);

    return "completed";
    }



}
