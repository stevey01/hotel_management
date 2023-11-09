import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit{
  id!: number;
  room: Room = new Room();
  constructor(private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoomById(this.id).subscribe((data) => {
      this.room = data;
    }, (error) => console.log(error));
  }

  onSubmit(){
    this.roomService.updateRoom(this.id, this.room).subscribe( data=>
      {
     this.goToRoomList();
      }
      , (error: any) => console.log(error));
      Swal.fire(' Room not Updated');
      this.router.navigate(['/room']);
    }
    goToRoomList(){
      this.router.navigate(['room']);
      Swal.fire('Room Details Updated');
    }
  


}
