import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
   
    private auth: AuthService,
    private router: Router
  ) {}
  log() {
        this.auth.logOut();
          Swal.fire('Logout Successful !!');
          this.router.navigate(['signin']);
        }
      
     

}

