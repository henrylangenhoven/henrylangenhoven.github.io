import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutModule } from './main/about/about.module';
import { ResumeModule } from './main/resume/resume.module';
import { ServicesModule } from './main/services/services.module';
import { ContactModule } from './main/contact/contact.module';
import { PortfolioModule } from './main/portfolio/portfolio.module';
import { FactsModule } from './main/facts/facts.module';
import { TestimonialsModule } from './main/testimonials/testimonials.module';
import { SkillsModule } from './main/skills/skills.module';

@NgModule({
  declarations: [AppComponent, HeroComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ResumeModule,
    ServicesModule,
    ContactModule,
    PortfolioModule,
    FactsModule,
    TestimonialsModule,
    SkillsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
