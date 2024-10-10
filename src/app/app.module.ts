import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import { MatToolbarModule} from "@angular/material/toolbar";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SectorComponent } from './components/sector/sector.component';
import { RockrouteComponent } from './components/rockroute/rockroute.component';
import {MatMenu, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { RoutedescribeComponent } from './components/routedescribe/routedescribe.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { HttpClientModule } from '@angular/common/http';
import { MassiveComponent} from "./components/massive/massive.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SectorComponent,
    RockrouteComponent,
    RoutedescribeComponent,
    MassiveComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatMenuModule,
        MatMenuTrigger,
        MatMenu,
        HttpClientModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
