package com.stranger.Employee.repository;

import com.stranger.Employee.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//repository will interact with database to save the data

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeEntity, Long> {
}
