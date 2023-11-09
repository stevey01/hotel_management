import { Component } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  rooms: Room[] = [];

IssueBill(id:number)
{
  this.router.navigate(['issuebill',id])
}


  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRooms();
  }
  private getRooms(){
    this.roomService.getRoomList().subscribe(data => {
      this.rooms = data;
    });
}


updateRoom(id: number){
  this.router.navigate(['update-room',id]);
}

deleteRoom(id: number){
  this.roomService.deleteRoom(id).subscribe(data=>{
    console.log(data);
    this.getRooms();
  })
}

}
