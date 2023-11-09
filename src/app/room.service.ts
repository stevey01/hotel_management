import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from './room';
import { Observable } from 'rxjs';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { }


  private baseURL = "http://localhost:8085/hms/v4/room";
private baseURL1= "http://localhost:8085/hms/v1/guest";
private baseUrl2="http://localhost:8085/hms/v4/";

  getRoomList(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL}`);
  }
  createRoom(room: Room): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, room);
  }
  getGuestById(id: number): Observable<Guest>{
    return this.httpClient.get<Guest>(`${this.baseURL1}/${id}`);
  }
  getRoomById(id: number): Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL}/${id}`);
  }

  updateRoom(id: number, room: Room): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, room);
  }

  deleteRoom(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  findByDate(check_in_date: Date, checkout_date: Date): Observable<any[]> {
   // const requestOptions = this.createRequestOptions();
    return this.httpClient.get<any[]>(`${this.baseUrl2}search/?checkin_date=${check_in_date}&checkout_date=${checkout_date}`);
  }



}
