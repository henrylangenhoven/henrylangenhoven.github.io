import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FactsComponent } from './main/facts/facts.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ResumeComponent } from './main/resume/resume.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ServicesComponent } from './main/services/services.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutModule } from './main/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,

    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
