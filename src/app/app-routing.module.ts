import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComanderAirlockCameraComponent } from './components/comander/comander-airlock-camera/comander-airlock-camera.component';
import { ComanderAirlockComponent } from './components/comander/comander-airlock/comander-airlock.component';
import { ComanderCombatComponent } from './components/comander/comander-combat/comander-combat.component';
import { ComanderComsComponent } from './components/comander/comander-coms/comander-coms.component';
import { ComanderMainComponent } from './components/comander/comander-main/comander-main.component';
import { ComanderNavComponent } from './components/comander/comander-nav/comander-nav.component';
import { GunnerMainComponent } from './components/gunner/gunner-main/gunner-main.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PilotMainComponent } from './components/pilot/pilot-main/pilot-main.component';
import { AirlockComponent } from './components/utilities/airlock/airlock.component';
import { ArmoryComponent } from './components/utilities/armory/armory.component';
import { PilotDroneControlComponent } from './components/pilot/pilot-drone-control/pilot-drone-control.component';
import { PilotNavControlComponent } from './components/pilot/pilot-nav-control/pilot-nav-control.component';
import { PilotDockingComponent } from './components/pilot/pilot-docking/pilot-docking.component';
import { PilotReactorComponent } from './components/pilot/pilot-reactor/pilot-reactor.component';


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
  {path : 'pilot/nav-control', component : PilotNavControlComponent},
  {path : 'pilot/drone-control', component : PilotDroneControlComponent},
  {path : 'pilot/docking', component : PilotDockingComponent},
  {path : 'pilot/reactor', component : PilotReactorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
