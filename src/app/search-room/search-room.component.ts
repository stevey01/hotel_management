import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent {
  search!: FormGroup;
  noRoomsFoundMessage: string = ''; // Initialize it with an empty string
 
 
  datasource: any[]=[];
  constructor(private roomService:RoomService,
          private router:Router,
          private formbuilder:FormBuilder
    ) { }
 
    ngOnInit():void{
      this.search=this.formbuilder.group({
        check_in_date: [
          '',
          [
            Validators.required,
           
          ],
        ],
        checkout_date: [
          '',
          [
            Validators.required,
           
          ],
        ]
      });}

      searchRooms()
      {
        this.roomService.findByDate(this.search.value.check_in_date,this.search.value.checkout_date).subscribe
          ({
            next:(val:any)=>{
              this.datasource=val;
              if(this.datasource.length===0)
              {
                Swal.fire(" Rooms found");
              }
            },
            
            error:console.error,
            
          });
        
      }
}
