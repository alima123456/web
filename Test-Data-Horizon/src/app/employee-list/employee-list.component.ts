import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  pageSize = 10;
  currentPage = 1;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
    });
  }
  sortByFirstName() {
    this.employeeService.getEmployeesSortedByFirstName().subscribe((data: any[]) => {
      this.employees = data;
    });
  }
}
