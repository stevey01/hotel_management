import { Component, OnInit } from '@angular/core';
import { Reserve } from '../reserve';
import { ReserveService } from '../reserve.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-reserve',
  templateUrl: './create-reserve.component.html',
  styleUrls: ['./create-reserve.component.css']
})
export class CreateReserveComponent implements OnInit {
  reserve: Reserve = new Reserve();
  constructor(private reservationService: ReserveService,private router:Router) { }

  ngOnInit(): void {
  }

  saveReserve(){
    this.reservationService.createReserve(this.reserve).subscribe( data =>{
      console.log(data);
      this.goToReservationList();
    },
    error => console.log(error));
    Swal.fire('Reservation Not Created');
  }

  goToReservationList(){
    Swal.fire('Reservation Created');
    this.router.navigate(['reserve']);
  }
  
  onSubmit(){
    console.log(this.reserve);
    this.saveReserve();
  }
}




