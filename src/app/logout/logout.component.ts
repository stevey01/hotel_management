import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
   
    private login: LoginService,
    private router: Router
  ) {}
  formSubmit() {
   
   

   
        if (this.login.logout() === true) {
          Swal.fire('Logout Successful !!');
          this.router.navigate(['/login']);
        }
        Swal.fire('Logout unsccessful !!');
     

}
}
