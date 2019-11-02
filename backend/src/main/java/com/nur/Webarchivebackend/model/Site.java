package com.nur.Webarchivebackend.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Data
@Entity
public class Site {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column
    private Integer id;
    @Column
    private String name;
    @Column
    private String color;
    @Column
    private String description;
    @Column
    private String url;


}
