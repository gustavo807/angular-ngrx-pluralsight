import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../employee';
import { Store, select } from '@ngrx/store';
import { EmployeeState } from '../../state/employee.reducer';
import * as employeActions from '../../state/employee.actions';
import * as fromEmployee from '../../state';

@Component({
  selector: 'pm-employee-shell',
  templateUrl: './employee-shell.component.html',
})
export class EmployeeShellComponent implements OnInit {

  employees$ : Observable<Employee[]>
  errorMessage$: Observable<string>
  loading$: Observable<boolean>

  constructor(private employeeService : EmployeeService, private store: Store<EmployeeState>) { }

  ngOnInit() {
    this.store.dispatch(new employeActions.Load())
    this.employees$ = this.store.pipe(select(fromEmployee.getProducts))
    this.errorMessage$ = this.store.pipe(select(fromEmployee.getError))
    this.loading$ = this.store.pipe(select(fromEmployee.getLoading))
    //this.employees$ = this.employeeService.getEmployees()
  }

}
