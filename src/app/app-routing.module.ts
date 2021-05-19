import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComanderMainComponent } from './components/comander/comander-main/comander-main.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
