import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {RockrouteComponent} from "./components/rockroute/rockroute.component";
import {MassiveComponent} from "./components/massive/massive.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'rockroute', component: RockrouteComponent },
  { path: 'massive/:id', component: MassiveComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
