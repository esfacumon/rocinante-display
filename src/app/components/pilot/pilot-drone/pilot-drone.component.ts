import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comander-nav',
  templateUrl: './pilot-drone.component.html',
  styleUrls: ['./pilot-drone.component.css', '../../sharedStyles.css']
})
export class PilotDroneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log("SIVA");
  }


}
