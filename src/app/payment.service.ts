import { Injectable } from '@angular/core';
import { Payment } from './payment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

 
  private baseURL = "http://localhost:8085/hms/v3/payment";

  constructor(private httpClient: HttpClient) { }
  
  getPaymentList(): Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}`);
  }

  createPayment(payment: Payment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, payment);
  }

  getPaymentById(id: number): Observable<Payment>{
    return this.httpClient.get<Payment>(`${this.baseURL}/${id}`);
  }

  updatePayment(id: number, reserve: Payment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, reserve);
  }

  deletePayment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
