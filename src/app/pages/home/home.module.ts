import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatButtonModule} from '@angular/material/button';
// import {Component} from '@angular/core';
// import {MatDialogModule} from '@angular/material/dialog';
const routes: Routes = [
  { path: '', component: HomeComponent }
];
@NgModule({
  declarations: [
    HomeComponent
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
