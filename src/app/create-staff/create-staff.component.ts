import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
  staff: Staff = new Staff();
  constructor(private staffService: StaffService,private router:Router) { }

  ngOnInit(): void {
  }

  saveStaff(){
    this.staffService.createStaff(this.staff).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
    Swal.fire('Staff Not Created');
  }

  goToEmployeeList(){
    Swal.fire('Staff Created');
    this.router.navigate(['staff']);
  }
  
  onSubmit(){
    console.log(this.staff);
    this.saveStaff();
  }
}





