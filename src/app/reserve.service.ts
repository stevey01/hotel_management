import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserve } from './reserve';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {


  private baseURL = "http://localhost:8085/hms/v4/reserve";

  constructor(private httpClient: HttpClient) { }
  
  getReserveList(): Observable<Reserve[]>{
    return this.httpClient.get<Reserve[]>(`${this.baseURL}`);
  }

  createReserve(reserve: Reserve): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, reserve);
  }

  getReserveById(id: number): Observable<Reserve>{
    return this.httpClient.get<Reserve>(`${this.baseURL}/${id}`);
  }

  updateReserve(id: number, reserve: Reserve): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, reserve);
  }

  deleteReserve(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  
}
