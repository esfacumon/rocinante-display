import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comander-airlock-camera',
  templateUrl: './comander-airlock-camera.component.html',
  styleUrls: ['./comander-airlock-camera.component.css', '../../sharedStyles.css']
})
export class ComanderAirlockCameraComponent implements OnInit {

  airlockName :string = 'Airlock:';

  constructor(route : ActivatedRoute) {
    const id : string = route.snapshot.params.id;
    this.airlockName = this.airlockName.concat(id);
   }

  ngOnInit(): void {
    
  }

}
