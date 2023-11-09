import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { User } from '../user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  user1: User = new User();
  errorMessage: string = '';
  role:string = '';
 
  constructor(
    private auth: AuthService,
    private router: Router,
 
  ) {}
 
  ngOnInit(): void {
    var iterator = this.auth.currentUserValue?.roles?.values();
    this.role = iterator?.next()?.value['role'];
    if (this.auth.currentUserValue?.id) {
      console.log(this.auth.currentUserValue?.id);
      this.router.navigate(['signin']);
      return;
    }
  }
 
  login() {
    this.auth.login(this.user1).subscribe(
      (data) => {
        //Prompt
        Swal.fire(
          'Login Successful ',
          'You are logged in as ' + data.roles[0].role
        );
       
        if (data.roles[0].role === 'RECEPTIONIST') {
          this.router.navigate(['/receptionist']);
        } else if (data.roles[0].role === 'MANAGER') {
          this.router.navigate(['/manager']);
        } else if (data.roles[0].role === 'OWNER') {
          this.router.navigate(['/home']);
        }
        console.log(data.roles[0].role);
      },
      (err) => {
        this.errorMessage = 'Username or password is incorrect.';
        console.log(err);
        Swal.fire(
          'Login UnSuccessful Please Try Again',
         
        );
      }
    );
  }
}
