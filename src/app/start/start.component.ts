import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
constructor(private router:Router){}

  Log()
  {
    this.router.navigate(['login']);
  }
  Reg()
  {
    this.router.navigate(['/Register']);
  }

}
