import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GameHomeComponent } from './game-home/game-home.component';

// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatButtonModule} from '@angular/material/button';
// import {Component} from '@angular/core';
// import {MatDialogModule} from '@angular/material/dialog';
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'game-home', component: GameHomeComponent },
  { path : '**', redirectTo : 'home' }
];
@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    GameHomeComponent
  ],
  imports: [
    CommonModule,
    // Component,
    RouterModule.forChild(routes),
    // MatSidenavModule,
    // MatButtonModule,
    // MatDialogModule,

  ]
})
export class HomeModule { }
