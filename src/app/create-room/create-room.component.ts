import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room();
  constructor(private roomService: RoomService,private router:Router) { }

  ngOnInit(): void {
  }

  savePayment(){
    this.roomService.createRoom(this.room).subscribe( data =>{
      console.log(data);
      this.goToRoomList();
    },
    error => console.log(error));
    Swal.fire('Enter valid details');
  }

  goToRoomList(){
    Swal.fire('Room Created');
    this.router.navigate(['room']);
  }
  
  onSubmit(){
    console.log(this.room);
    this.savePayment();
  }
}

