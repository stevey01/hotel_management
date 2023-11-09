import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:8126"
  constructor(
    private http:HttpClient
     ) { }


   
// add User
public addUser(user:User){
  return this.http.post(`${this.baseUrl}/api/v1/auth/signup`,user)
}

// user Login
login(loginData: User){
 return this.http.post(`${this.baseUrl}/users/login`,loginData);
}


//  user Logout
signOut(){
 return this.http.get(`${this.baseUrl}/users/logout`);
}
// Get User By Username
getUserByName(userName:string){
 return this.http.get<User>(`${this.baseUrl}/users/getByUserName/{userName}`);
}

// Get User By UserId
getUserById(userId:number){
  return this.http.get<User>(`${this.baseUrl}/users/getById/${userId}`);
 }

// Update User
public updateUser(user:User){
  console.log("SSS")
 return this.http.put(`${this.baseUrl}/users/update`,user)
}

// Update Admin
public updateAdmin(user:User){
return this.http.put(`${this.baseUrl}/users/update`,user)
}
}
