import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../guest.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css']
})
export class UpdateGuestComponent implements OnInit {
 
  id!: number;
  guest: Guest = new Guest();
  constructor(private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.guestService.getGuestById(this.id).subscribe((data: any) => {
      this.guest = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.guestService.updateGuest(this.id, this.guest).subscribe( data =>{
     this.goToGuestList();
    }
    , (error: any) => console.log(error));
    Swal.fire('Guest Not Updated');
  }
  goToGuestList(){
    this.router.navigate(['guests']);
    Swal.fire('Guest Updated');
  }

}

