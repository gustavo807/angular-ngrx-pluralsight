import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'pm-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {
  @Input() employees : Employee[]
  @Input() errorMessage: string
  @Input() loading: boolean
  @Input() currentEmployee: Employee

  @Output() setEmployee = new EventEmitter<Employee>()

  constructor() { }

  ngOnInit() {
  }

  handleClick(employee: Employee): void{
    this.setEmployee.emit(employee)
  }

}
