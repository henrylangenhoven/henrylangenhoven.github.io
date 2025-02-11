import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./hero/hero.component').then(m => m.HeroComponent) },
  { path: '#', redirectTo: '', pathMatch: 'full' },
  { path: '#about', loadChildren: () => import('./main/about/about.component').then(m => m.AboutComponent) },
  { path: '#resume', loadChildren: () => import('./main/resume/resume.component').then(m => m.ResumeComponent) },
  {
    path: '#portfolio',
    loadChildren: () => import('./main/portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: '#services',
    loadChildren: () => import('./main/services/services.component').then(m => m.ServicesComponent),
  },
  { path: '#contact', loadChildren: () => import('./main/contact/contact.component').then(m => m.ContactComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
