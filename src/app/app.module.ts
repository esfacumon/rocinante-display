import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 


import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ComanderMainComponent } from './components/comander/comander-main/comander-main.component';
import { PilotMainComponent } from './components/pilot/pilot-main/pilot-main.component';
import { GunnerMainComponent } from './components/gunner/gunner-main/gunner-main.component';
import { AirlockComponent } from './components/utilities/airlock/airlock.component';
import { ArmoryComponent } from './components/utilities/armory/armory.component';  

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ComanderMainComponent,
    PilotMainComponent,
    GunnerMainComponent,
    AirlockComponent,
    ArmoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
