import { Injectable } from '@angular/core';
import { Staff } from './staff';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  

 
  private baseURL = "http://localhost:8085/hms/v2/staff";

  constructor(private httpClient: HttpClient) { }
  
  getStaffList(): Observable<Staff[]>{
    return this.httpClient.get<Staff[]>(`${this.baseURL}`);
  }
  createStaff(staff: Staff): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, staff);
  }

  getStaffById(id: number): Observable<Staff>{
    return this.httpClient.get<Staff>(`${this.baseURL}/${id}`);
  }

  updateStaff(id: number, staff: Staff): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, staff);
  }

  deleteStaff(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  
}


