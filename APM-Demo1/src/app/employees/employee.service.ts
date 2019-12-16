import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { catchError, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private base_url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<Employee[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.get<Employee[]>(this.base_url,{headers})
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  createEmployee(employee: Employee): Observable<Employee>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<Employee>(this.base_url, employee, {headers})
      .pipe(
        tap(data => console.log('Created Employee', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    var url = `${this.base_url}/${employee.id}`
    return this.http.put<Employee>(url, employee, {headers})
      .pipe(
        tap(data => console.log('UpdatedProduct', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  deleteEmployee(id: number) : Observable<{}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    var url = `${this.base_url}/${id}`
    return this.http.delete<Employee>(url, {headers})
      .pipe(
        tap(data => console.log('DeletedProduct', id)),
        catchError(this.handleError)
      )
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    console.log(errorMessage)
    return throwError(errorMessage);
  }

}
