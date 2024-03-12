import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: '#', redirectTo: '', pathMatch: 'full' },
  { path: '#about', loadChildren: () => import('./main/about/about.module').then(m => m.AboutModule) },
  { path: '#resume', loadChildren: () => import('./main/resume/resume.module').then(m => m.ResumeModule) },
  { path: '#portfolio', loadChildren: () => import('./main/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: '#services', loadChildren: () => import('./main/services/services.module').then(m => m.ServicesModule) },
  { path: '#contact', loadChildren: () => import('./main/contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
