import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { ServicesModule } from './services/services.module';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { FactsModule } from './facts/facts.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { SkillsModule } from './skills/skills.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    AboutModule,
    ResumeModule,
    ServicesModule,
    ContactModule,
    PortfolioModule,
    FactsModule,
    TestimonialsModule,
    SkillsModule,
    MainComponent,
  ],
  exports: [
    MainComponent,
    AboutModule,
    ResumeModule,
    ServicesModule,
    ContactModule,
    PortfolioModule,
    FactsModule,
    TestimonialsModule,
    SkillsModule,
  ],
})
export class MainModule {}
