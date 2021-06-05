import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comander-nav-vessel',
  templateUrl: './comander-nav-vessel.component.html',
  styleUrls: ['./comander-nav-vessel.component.css', '../../sharedStyles.css'] 
})
export class ComanderNavVesselComponent implements OnInit {

  vesselName : string;

  data : Vessel[] = [new Vessel('Donnager', '../../../../assets/mcrn.png', '475', '130', 'militar', '3,4 Mm','../../../../assets/donnager.jpg'),
  new Vessel('Agatha-King', '../../../../assets/un.jpg', '376', '110', 'militar', '2,1 Mm','../../../../assets/agatha-king.jpg'),
  new Vessel('Scipio-Africanus', '../../../../assets/mcrn.png', '31', '9', 'militar', '0,7 Mm','../../../../assets/scipio-africanus.jpg')]

  activeVessel : Vessel;

  constructor(route : ActivatedRoute) {
    this.vesselName = route.snapshot.params.id;
    console.log(this.vesselName);

    switch(this.vesselName){
      case 'Donnager':
        this.activeVessel = this.data[0];
        break;
      case 'Agatha-King':
        this.activeVessel = this.data[1];
        break;
      case 'Scipio-Africanus':
        this.activeVessel = this.data[2];
        break;
    }
   }

  ngOnInit(): void {
  }

} 

export class Vessel{
  constructor (public name : string,
     public flag : string,
     public height : string,
     public width : string,
     public type : string,
     public distance : string,
     public img : string){}
}
