import { Employee } from '../employee';
import { EmployeeActions, EmployeeActionTypes } from './employee.actions'
export interface EmployeeState {
    employees: Employee[]    
    error: string
    loading: boolean
    currentEmployeeId: number | null
}

const ininitalState : EmployeeState = {
    employees: [],
    error: '',
    loading: false,
    currentEmployeeId: null
}

export function reducer(state = ininitalState, action : EmployeeActions): EmployeeState{
    switch(action.type){
        case EmployeeActionTypes.ClearCurrentEmployee:
            return {
                ...state,
                currentEmployeeId: null
            }

        case EmployeeActionTypes.SetCurrentEmployee:
            return {
                ...state,
                currentEmployeeId: action.payload
            }

        case EmployeeActionTypes.Load:
            return {
                ...state,
                loading: true
            }
        
        case EmployeeActionTypes.LoadSuccess:
            return {
                ...state,
                employees: action.payload,
                loading:false
            }
        
        case EmployeeActionTypes.LoadFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return {
                ...state
            }
    }
}