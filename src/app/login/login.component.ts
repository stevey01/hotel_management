import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '',
    password: '',
  };

  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log('login btn clicked');

    if (
      this.loginData.email.trim() == '' ||
      this.loginData.email == null
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login...
        this.login.loginUser(data.token);

     //   this.login.getCurrentUser().subscribe((user: any) => {
       //   this.login.setUser(user);
         // console.log(user);

          //redirect ...ADMIN: admin-dashboard
          //redirect ...NORMAL:normal-dashboard
          if (this.login.getUserRole() == 'DEVELOPER') {
            //admin dashboard
            // window.location.href = '/admin';
            this.router.navigate(['home']);
            this.login.loginStatusSubject.next(true);
            Swal.fire('Login Successful !!','','success');
          } else if (this.login.getUserRole() == 'MANAGER') {
            //admin dashboard
            // window.location.href = '/admin';
            this.router.navigate(['manager']);
            this.login.loginStatusSubject.next(true);
            Swal.fire('Login Successful !!','','success');
          } else if (this.login.getUserRole() == 'RECEPTIONIST') {
              //normal user dashbaord
            // window.location.href = '/user-dashboard';
            this.router.navigate(['user']);
            this.login.loginStatusSubject.next(true);
            Swal.fire('Login Successful !!','','success');
          } else {
            this.login.logout();
          }
     //   });
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
        Swal.fire('Invalid Details !! Try again','','error');
      }
    );
  }

}
