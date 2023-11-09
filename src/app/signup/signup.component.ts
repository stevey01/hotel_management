import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { MatSnackBar } from '@angular/material/snack-bar';







@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private auth: AuthService
  ) {}
  //Icons

  //Roles
  roles = ['OWNER', 'RECEPTIONIST', 'MANAGER'];
  roleHasError = true;
  errorMessage: string = '';
  ngOnInit(): void {
    if (this.auth.currentUserValue?.id) {
      this.router.navigate(['/home']);
    }
  }
  validateRole(value: string) {
    if (value === 'default') {
      this.roleHasError = true;
    } else {
      this.roleHasError = false;
    }
  }
 
  user: User = new User();
  register() {
    this.auth.register(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Welcome To HappyCars Network',
          text: 'You are registered succesfully',
        });
        this.router.navigate(['/login']);
      },
      (err) => {
        if (err?.status === 409) {
          this.errorMessage = 'User Exists Already';
        } else {
          this.errorMessage =
            'Unexpected error occurred. Error is: ' + err?.errorMessage;
          console.log(err);
        }
      }
    );
  }
}
