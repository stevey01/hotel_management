import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Guest } from '../guest';

@Component({
  selector: 'app-issue-bill',
  templateUrl: './issue-bill.component.html',
  styleUrls: ['./issue-bill.component.css']
})
export class IssueBillComponent implements OnInit {


  id!: number;
  room!: Room;
  guest!:Guest;
  constructor(private route:ActivatedRoute,private roomService:RoomService)
  {
    
  }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.room=new Room();
    this.roomService.getRoomById(this.id).subscribe(data=>
      {
         this.room=data;
      }
      );
      this.roomService.getGuestById(this.id).subscribe(data=>
        {
           this.guest=data;
        }
        );


  }




}
