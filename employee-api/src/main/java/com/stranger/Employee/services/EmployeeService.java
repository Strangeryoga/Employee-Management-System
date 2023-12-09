package com.stranger.Employee.services;

import com.stranger.Employee.model.Employee;

import java.util.List;

//implement interface

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
