import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilot-nav-control',
  templateUrl: './pilot-nav-control.component.html',
  styleUrls: ['./pilot-nav-control.component.css', '../../sharedStyles.css']
})
export class PilotNavControlComponent implements OnInit {

  speed : number = 2000;
  heading : number = 64;

  constructor() { }

  ngOnInit(): void {
  }

  incSpeed(){
    this.speed = this.speed + 10;
  }

  decSpeed(){
    this.speed = this.speed - 10;
  }

  incHeading(){
    this.heading = this.heading + 1;
  }

  decHeading(){
    this.heading = this.heading - 1;
  }
}
