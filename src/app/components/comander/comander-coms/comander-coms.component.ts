import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-comander-coms',
  templateUrl: './comander-coms.component.html',
  styleUrls: ['./comander-coms.component.css', '../../sharedStyles.css']
})
export class ComanderComsComponent implements OnInit {

  columns : string[] = ['Name', 'Delay'];
  data : ComsVessel[] = [new ComsVessel('Nauvoo', '13 sec'),
                            new ComsVessel('Tachi', '30 sec'),
                            new ComsVessel('Razorback', '1 min'),
                            new ComsVessel('Tycho', '5 min'),
                            new ComsVessel('Dragon', '7 min')];



  @ViewChild(MatTable) matTable: MatTable<ComsVessel>;

  constructor() { }

  ngOnInit(): void {
  }

  

}

export class ComsVessel{
    constructor(public Name : string, public Delay : string ){}
}
