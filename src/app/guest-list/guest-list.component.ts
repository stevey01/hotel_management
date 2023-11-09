import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {


  guests: Guest[] = [];
  constructor(private guestService: GuestService,private router:Router) { }

  ngOnInit(): void {
    this.getGuest();
  }

  private getGuest(){
    this.guestService.getGuestList().subscribe((data: Guest[]) => {
      this.guests = data;
    });
  }

  updateGuest(id: number){
    this.router.navigate(['update-guest', id]);
  }

  deleteGuest(id: number){
    this.guestService.deleteGuest(id).subscribe( (data: any) => {
      console.log(data);
      this.getGuest();
    })
}
}
