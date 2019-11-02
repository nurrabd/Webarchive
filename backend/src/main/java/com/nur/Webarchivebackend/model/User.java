package com.nur.Webarchivebackend.model;
import javax.persistence.*;
import javax.validation.constraints.Email;

import lombok.Data;

import java.util.List;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column
    private Integer userId;
    @Column
    private String password;
    @Column(unique = true, length = 250)
    @Email
    private String email;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private List<Site> sites;

}
