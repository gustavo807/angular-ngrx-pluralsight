import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { EmployeeShellComponent } from './containers/employee-shell/employee-shell.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './state/employee.effects';


const employeeRoutes : Routes = [
  {
    path: '',
    component: EmployeeShellComponent
  }
]

@NgModule({
  declarations: [EmployeeShellComponent, EmployeeListComponent, EmployeeEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes),
    StoreModule.forFeature('employees',reducer),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeeModule { }
