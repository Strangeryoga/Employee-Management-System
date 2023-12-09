package com.stranger.Employee.controller;

import com.stranger.Employee.model.Employee;
import com.stranger.Employee.services.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//handles all the API's

@CrossOrigin(origins = "http://localhost:5173" )
@RestController
@RequestMapping("/api")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>>  deleteEmployee(@PathVariable Long id){
        boolean delete=false;
        delete=employeeService.deleteEmployee(id);

        Map<String, Boolean> resp=new HashMap<>();
        resp.put("deleted", delete);
        return ResponseEntity.ok(resp);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee=null;
        employee=employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        employee=employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(employee);
    }


}
