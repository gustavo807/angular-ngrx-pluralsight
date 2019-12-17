import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
