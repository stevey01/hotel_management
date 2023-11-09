import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})

export class StaffListComponent implements OnInit {

  staffs: Staff[] = [];
  constructor(private staffService:StaffService, private router:Router){}

  ngOnInit(): void {
this.getStaffs();
  }
  private getStaffs(){
    this.staffService.getStaffList().subscribe((data: Staff[]) => {
      this.staffs = data;
    });
  }
  updateStaff(id: number){
    this.router.navigate(['update-staff', id]);
  }
  
  deleteStaff(id: number){
    this.staffService.deleteStaff(id).subscribe(data=>{
      console.log(data);
      this.getStaffs();
    })
  }
}
