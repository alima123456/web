import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://retoolapi.dev/HYd96h/data';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getEmployeesSortedByFirstName(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => {
        // Sort data by the 'firstname' field
        return data.sort((e1, e2) => e1.firstName.localeCompare(e2.firstName));
      })
    );
  }
}
