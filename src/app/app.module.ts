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
import { LoginComponent } from "./components/login/login.component";
import {MatMenu, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
// import { RoutedescribeComponent } from './components/routedescribe/routedescribe.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MassiveComponent} from "./components/massive/massive.component";
import {NgOptimizedImage} from "@angular/common";
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ListmassivesComponent} from "./components/listmassives/listmassives.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AuthInterceptor} from "./auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SectorComponent,
    RockrouteComponent,
    ListmassivesComponent,
    MassiveComponent,
    LoginComponent,

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
        MatListModule,
        HttpClientModule,
        NgOptimizedImage,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatSidenavModule,

    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
