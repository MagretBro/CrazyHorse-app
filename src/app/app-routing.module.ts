import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {RockrouteComponent} from "./components/rockroute/rockroute.component";
import {MassiveComponent} from "./components/massive/massive.component";
import {SectorComponent} from "./components/sector/sector.component";
import {ListmassivesComponent} from "./components/listmassives/listmassives.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'rockroute', component: RockrouteComponent },
  { path: 'massive/:id', component: MassiveComponent },
  { path: 'sector/:id', component: SectorComponent },
  { path: 'list', component: ListmassivesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
