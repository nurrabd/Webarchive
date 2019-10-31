package com.nur.Webarchivebackend.model;
import javax.persistence.*;
import javax.validation.constraints.Email;

import lombok.Data;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column
    private Integer id;
    @Column
    private String name;
    @Column
    private String password;
    @Column
    @Email
    private String email;


}
