import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GameHomeComponent } from './game-home/game-home.component';
import { RuleComponent } from './rule/rule.component';
import { KycModalComponent } from './kyc-modal/kyc-modal.component';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'game-home', component: GameHomeComponent },
  { path: 'rule', component: RuleComponent },
  { path: 'kyc', component: KycModalComponent },
  { path: 'profile', component: ProfileComponent },
];
@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    GameHomeComponent,
    KycModalComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule
  ]
})
export class HomeModule { }
