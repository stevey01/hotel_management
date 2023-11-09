import { Component, OnInit, ɵɵpipeBind1 } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {

  guest: Guest = new Guest();
  constructor(private guestService: GuestService,private router:Router) { }

  ngOnInit(): void {
  }

 /* saveGuest(){
    this.guestService.createGuest(this.guest).subscribe( data =>{
      console.log(data);
    
    },
    error => console.log(error));
  }
  

  onSubmit()
  {
console.log(this.guest);
this.saveGuest();
Swal.fire('Guest Created');
this.router.navigate(["/guests"]);
  }*/
  saveGuest(){
    this.guestService.createGuest(this.guest).subscribe( data =>{
      console.log(data);
      this.goToGuestList();
    },
    error => console.log(error));
    Swal.fire('Guest Not Created');
  }

  goToGuestList(){
    Swal.fire('Guest Created');
    this.router.navigate(['/guests']);
  }
  
  onSubmit(){
    console.log(this.guest);
    this.saveGuest();
  }
}
