import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../sharedStyles.css']
})
export class MainComponent implements OnInit {

  speed: String;
  altitude: String;

  constructor() { }

  ngOnInit(): void {
    this.speed = '2438 m/s';
    this.altitude = '6,5 Gm';
  }

}
