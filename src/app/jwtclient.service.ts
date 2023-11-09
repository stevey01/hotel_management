import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtclientService {

  constructor(private httpClient: HttpClient) { }


  public generateToken(request: any) {
    return this.httpClient.post<string>("http://localhost:8085/auth/token", request, {  responseType: 'text' as 'json' });
  }
  public welcome(token: string) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:8085/hms/v1/guest", {headers, responseType: 'text' as 'json' });
  }
}
