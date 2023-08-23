import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { AboutModule } from './about/about.module';
import { FactsModule } from './facts/facts.module';
import { SkillsModule } from './skills/skills.module';
import { MockComponents } from 'ng-mocks';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FactsComponent } from './facts/facts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockComponents(
          AboutComponent,
          ContactComponent,
          FactsComponent,
          PortfolioComponent,
          ResumeComponent,
          ServicesComponent,
          SkillsComponent,
          TestimonialsComponent
        ),
      ],
      imports: [AboutModule, FactsModule, SkillsModule],
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
