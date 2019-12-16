import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as employeeActions from './employee.actions'
import { EmployeeService } from '../employee.service';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Employee } from '../employee';

@Injectable()
export class EmployeeEffects{
    
    constructor(private actions$: Actions,
        private employeeService: EmployeeService){}
    
    @Effect()
    loadEmployees$ = this.actions$.pipe(
        ofType(employeeActions.EmployeeActionTypes.Load),
        switchMap((action: employeeActions.Load) => 
            this.employeeService.getEmployees().pipe(
                map((employees: Employee[]) => (new employeeActions.LoadSuccess(employees))),
                catchError(err => of(new employeeActions.LoadFail(err)))
            )
        )
    )
}