import * as fromRoot from '../../state/app.state'
import { Employee } from '../employee';
import { EmployeeState } from './employee.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State{
    employees: EmployeeState
}

const getEmployeeFeatureState = createFeatureSelector<EmployeeState>('employees')

export const getProducts = createSelector(getEmployeeFeatureState,
    state => state.employees)

export const getError = createSelector(getEmployeeFeatureState,
    state => state.error)    

export const getLoading = createSelector(getEmployeeFeatureState,
    state => state.loading)    