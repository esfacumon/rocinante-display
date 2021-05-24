import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comander-nav',
  templateUrl: './comander-nav.component.html',
  styleUrls: ['./comander-nav.component.css', '../../sharedStyles.css']
})
export class ComanderNavComponent implements OnInit {


  columns : string[] = ['Name', 'Distance'];
  data : NavVessel[] = [new NavVessel('Donnager', '3,4 Mm'),
                            new NavVessel('Agatha-King', '2,1 Mm'),
                            new NavVessel('Scipio-Africanus', '0,7 Mm')];



  @ViewChild(MatTable) matTable: MatTable<NavVessel>;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  getRecord(row : NavVessel){
    console.log(row.Name);
    this.router.navigate(['/comander/nav-vessel/'.concat(row.Name)]);

  }

}


export class NavVessel{
  constructor(public Name : string, public Distance : string ){}
}
