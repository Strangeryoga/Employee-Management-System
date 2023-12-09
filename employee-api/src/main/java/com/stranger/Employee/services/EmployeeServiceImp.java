package com.stranger.Employee.services;

import com.stranger.Employee.entity.EmployeeEntity;
import com.stranger.Employee.model.Employee;
import com.stranger.Employee.repository.EmployeeRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

//this is business logic

@Service
public class EmployeeServiceImp<id> implements  EmployeeService{

    private EmployeeRepo employeeRepo;

    public EmployeeServiceImp(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    //converts employee to employee entity to save into database
    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity= new EmployeeEntity();
        //copies all the data to employee entity
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepo.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities
                =employeeRepo.findAll();

        //make a list of employees for ui
        List<Employee> employees=employeeEntities
                .stream()
                .map(emp -> new Employee(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId()
                )).collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp=employeeRepo.findById(id).get();
        employeeRepo.delete(emp);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity
                =employeeRepo.findById(id).get();
        Employee employee=new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity
                =employeeRepo.findById(id).get();
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeRepo.save(employeeEntity);
        return employee;
    }


}
