import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'pm-employee-edit',
  templateUrl: './employee-edit.component.html',
  styles: []
})
export class EmployeeEditComponent implements OnInit {
  @Input() currentEmployee: Employee
  
  constructor() { }

  ngOnInit() {
  }

}
