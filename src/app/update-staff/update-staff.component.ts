import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../staff.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
 
  id!: number;
  staff: Staff = new Staff();
  constructor(private staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.staffService.getStaffById(this.id).subscribe((data) => {
      this.staff = data;
    }, (error: any) => console.log(error));
  }
  onSubmit(){
    this.staffService.updateStaff(this.id, this.staff).subscribe( data =>{
    this.goToStaffList();
    }
    , (error: any) => console.log(error));
    Swal.fire('Staff Details Not Updated');
   
  }

  goToStaffList(){
    this.router.navigate(['staff']);
    Swal.fire('Staff Details Updated');
  }
   
 
  }

