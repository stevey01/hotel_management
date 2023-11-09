import { Component, OnInit } from '@angular/core';
import { JwtclientService } from '../jwtclient.service';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  authRequest:any={
    "username":"bala",
    "password":"bala@123" 
  };
  response: any;

 
  constructor(private service:JwtclientService) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>this.accessApi(data));
      }
    
    
      public accessApi(token: string){
    let resp=this.service.welcome(token);
    resp.subscribe(data=>this.response=data);
      }
}
