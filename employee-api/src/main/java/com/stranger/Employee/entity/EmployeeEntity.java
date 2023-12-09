package com.stranger.Employee.entity;

import jakarta.persistence.*;
import lombok.Data;

//save the data to the database

@Entity
@Data
@Table(name= "employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
