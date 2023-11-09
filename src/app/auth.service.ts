import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { User } from './user';
 

 
@Injectable({
  providedIn: 'root',
})
 
export class AuthService {
  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser');
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }
 
  private currentUserSubject: BehaviorSubject<User>;
  public role: string = '';
  public currentUser: Observable<User>;
  
  private baseUrl="http://localhost:8198/"
  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }
 
  //API call to add a user to authDB
  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}api/auth/register`, user);
  }
 
  //API call to log the use to application
  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}api/auth/login`, user).pipe(
      map((response) => {
        if (response) {
          this.role = response.roles[0].role;
          console.log(this.role);
          localStorage.setItem('currentUser', JSON.stringify(response));
          console.log(this.currentUser);
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }
 
  //funtion to logout the user
  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User());
  }
}
 