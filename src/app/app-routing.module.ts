import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {
      seo: {
        title: 'Privacy Policy - Evenuefy',
        description: "Evenuefy is India's growing Do-It-Yourself Virtual Events Platform where users can create and host Virtual events on their own. On Evenuefy you can host all kinds of Hybrid/Virtual Events."
      }
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    data: {
      seo: {
        title: 'Privacy Policy - Evenuefy',
        description: "Evenuefy is India's growing Do-It-Yourself Virtual Events Platform where users can create and host Virtual events on their own. On Evenuefy you can host all kinds of Hybrid/Virtual Events."
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
