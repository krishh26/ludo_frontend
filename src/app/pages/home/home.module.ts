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
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { RefundCancelattionPolicyComponent } from './refund-cancelattion-policy/refund-cancelattion-policy.component';
import { ResponsibleGamingComponent } from './responsible-gaming/responsible-gaming.component';
import { PlatformCommissionComponent } from './platform-commission/platform-commission.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransitionHistoryComponent } from './transition-history/transition-history.component';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { AddWithdrawComponent } from './add-withdraw/add-withdraw.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'game-home', component: GameHomeComponent },
  { path: 'rule', component: RuleComponent },
  { path: 'kyc', component: KycModalComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'terms-and-condition', component: TermsConditionComponent },
  { path: 'refund-policy', component: RefundCancelattionPolicyComponent },
  { path: 'responsible-gaming', component: ResponsibleGamingComponent },
  { path: 'platform-commission', component: PlatformCommissionComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'transition-history', component: TransitionHistoryComponent },
  { path: 'add-wallet', component: AddWalletComponent },
  { path: 'add-withdraw', component: AddWithdrawComponent },
];
@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    GameHomeComponent,
    KycModalComponent,
    ProfileComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    PlatformCommissionComponent,
    TermsConditionComponent,
    RefundCancelattionPolicyComponent,
    ResponsibleGamingComponent,
    WalletComponent,
    TransitionHistoryComponent,
    AddWalletComponent,
    AddWithdrawComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule
  ]
})
export class HomeModule { }
