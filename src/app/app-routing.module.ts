import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComanderAirlockCameraComponent } from './components/comander/comander-airlock-camera/comander-airlock-camera.component';
import { ComanderAirlockComponent } from './components/comander/comander-airlock/comander-airlock.component';
import { ComanderCombatComponent } from './components/comander/comander-combat/comander-combat.component';
import { ComanderComsComponent } from './components/comander/comander-coms/comander-coms.component';
import { ComanderMainComponent } from './components/comander/comander-main/comander-main.component';
import { ComanderNavVesselComponent } from './components/comander/comander-nav-vessel/comander-nav-vessel.component';
import { ComanderNavComponent } from './components/comander/comander-nav/comander-nav.component';
import { GunnerMainComponent } from './components/gunner/gunner-main/gunner-main.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PilotMainComponent } from './components/pilot/pilot-main/pilot-main.component';
import { AirlockComponent } from './components/utilities/airlock/airlock.component';
import { ArmoryComponent } from './components/utilities/armory/armory.component';

const routes: Routes = [
  {path : '', component : MainMenuComponent},
  {path : 'comander', component : ComanderMainComponent},
  {path : 'gunner', component : GunnerMainComponent},
  {path : 'pilot', component : PilotMainComponent},
  {path : 'airlock', component : AirlockComponent},
  {path : 'armory', component : ArmoryComponent},
  {path : 'comander/airlock', component : ComanderAirlockComponent},
  {path : 'comander/combat', component : ComanderCombatComponent},
  {path : 'comander/coms', component : ComanderComsComponent},
  {path : 'comander/airlock-camera/:id', component : ComanderAirlockCameraComponent},
  {path : 'comander/nav', component : ComanderNavComponent},
  {path : 'comander/nav-vessel/:id', component : ComanderNavVesselComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
