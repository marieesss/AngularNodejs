import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) { }

   // To Get The List Of Employee
 getEmployees() {
  return this
  .http
  .get(`${this.uri}`);
  }
 
  // To Get Employee Details For Single Record Using Id
 getEmployeeById(empid:string) {
  return this.http.get(`${this.uri}/editEmployee/${empid}`);
  }

  updateEmployee(id:string, body:any) {
    return this.http.put(`${this.uri}/updateEmployee/${id}`, body);
    }

   // To Delete Any Employee
 deleteEmployee(id:string) {
  return this.http.delete(`${this.uri}/deleteEmployee/${id}`);
  }

  // To Create/Add New Employee
 addEmployee(body:any) {
  return this.http.post(`${this.uri}/addEmployee`, body);
  }

}
