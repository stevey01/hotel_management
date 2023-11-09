import { Component, OnInit } from '@angular/core';
import { Reserve } from '../reserve';
import { Router } from '@angular/router';
import { ReserveService } from '../reserve.service';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent implements OnInit {
  

  reserves: Reserve[] = [];

  constructor(private reserveService: ReserveService,
    private router: Router) { }

  ngOnInit(): void {
    this.getReservation();
  }
  private getReservation(){
    this.reserveService.getReserveList().subscribe(data => {
      this.reserves = data;
    });
}
updateReserve(id: number){
  this.router.navigate(['update-reserve', id]);
}

deleteReserve(id: number){
  this.reserveService.deleteReserve(id).subscribe(data=>{
    console.log(data);
    this.getReservation();
  })
}
}




