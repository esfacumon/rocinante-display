import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-airlock',
  templateUrl: './airlock.component.html',
  styleUrls: ['./airlock.component.css' , '../../sharedStyles.css']
})
export class AirlockComponent implements OnInit {

  password : string = '1234';
  pass : string = '';

  state : string = 'CLOSED';
  
  constructor() { }

  ngOnInit(): void {
  }

  async onSubmit(){
    if(this.pass === this.password){
      this.state = 'OPEN';

    } else{
      this.state = 'BAD PASSWORD';
    }
    
    await this.delay(5000);

    this.state = 'CLOSED';
    this.pass = '';
      
    
  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
