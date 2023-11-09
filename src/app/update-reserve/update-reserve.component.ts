import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReserveService } from '../reserve.service';
import { Reserve } from '../reserve';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-reserve',
  templateUrl: './update-reserve.component.html',
  styleUrls: ['./update-reserve.component.css']
})
export class UpdateReserveComponent implements OnInit {
  id!: number;
  reserve: Reserve = new Reserve();
  constructor(private reserveService: ReserveService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];

    this.reserveService.getReserveById(this.id).subscribe((data) => {
      this.reserve = data;
    }, (error) => console.log(error));
  }

  onSubmit(){
    this.reserveService.updateReserve(this.id, this.reserve).subscribe( data=>
      {
     this.goToReserveList();
      }
      , (error: any) => console.log(error));
      Swal.fire('Reservation Details  Not Updated');
   
    }

    goToReserveList(){
      this.router.navigate(['reserve']);
      Swal.fire('Reservation Details Updated');
    }
  
  


 
  
}
