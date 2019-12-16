import { Action } from '@ngrx/store'
import { Employee } from '../employee'

export enum EmployeeActionTypes{
    Load = "[Employee] Load",
    LoadSuccess = "[Employee] Load Success",
    LoadFail = "[Employee] Load Fail",
    SetCurrentEmployee = "[Employee] Set Current Employee",
    ClearCurrentEmployee = "[Employee] Clear Current Employee "
}

export class SetCurrentEmployee implements Action{
    readonly type = EmployeeActionTypes.SetCurrentEmployee
    
    constructor(public payload: number){}
}

export class ClearCurrentEmployee implements Action{
    readonly type = EmployeeActionTypes.ClearCurrentEmployee    
}

export class Load implements Action{
    readonly type = EmployeeActionTypes.Load
}

export class LoadSuccess implements Action{
    readonly type = EmployeeActionTypes.LoadSuccess
    constructor(public payload: Employee[]){}
}

export class LoadFail implements Action{
    readonly type = EmployeeActionTypes.LoadFail

    constructor(public payload: string){}
}

export type EmployeeActions = Load
    | LoadSuccess
    | LoadFail
    | SetCurrentEmployee
    | ClearCurrentEmployee