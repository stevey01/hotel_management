import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent {
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
