import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {


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
