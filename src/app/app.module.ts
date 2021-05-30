import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';


import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ComanderMainComponent } from './components/comander/comander-main/comander-main.component';
import { PilotMainComponent } from './components/pilot/pilot-main/pilot-main.component';
import { GunnerMainComponent } from './components/gunner/gunner-main/gunner-main.component';
import { AirlockComponent } from './components/utilities/airlock/airlock.component';
import { ArmoryComponent } from './components/utilities/armory/armory.component';
import { ComanderAirlockComponent } from './components/comander/comander-airlock/comander-airlock.component';
import { ComanderCombatComponent } from './components/comander/comander-combat/comander-combat.component';
import { ComanderComsComponent } from './components/comander/comander-coms/comander-coms.component';
import { ComanderAirlockCameraComponent } from './components/comander/comander-airlock-camera/comander-airlock-camera.component';
import { ComanderNavComponent } from './components/comander/comander-nav/comander-nav.component';
import { PilotDroneControlComponent } from './components/pilot/pilot-drone-control/pilot-drone-control.component';
import { PilotNavControlComponent } from './components/pilot/pilot-nav-control/pilot-nav-control.component';
import { PilotDockingComponent } from './components/pilot/pilot-docking/pilot-docking.component';
import { PilotReactorComponent } from './components/pilot/pilot-reactor/pilot-reactor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ComanderMainComponent,
    PilotMainComponent,
    GunnerMainComponent,
    AirlockComponent,
    ArmoryComponent,
    ComanderAirlockComponent,
    ComanderCombatComponent,
    ComanderComsComponent,
    ComanderAirlockCameraComponent,
    ComanderNavComponent,
    PilotDroneControlComponent,
    PilotNavControlComponent,
    PilotDockingComponent,
    PilotReactorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
