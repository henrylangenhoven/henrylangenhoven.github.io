import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AboutService } from './about.service';
import { About } from './about.model';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let aboutService: AboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    aboutService = TestBed.inject(AboutService);
  });

  /*
   * Positive tests
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly and subscribe to getAbout', () => {
    // Mocking the response from getAbout service
    const mockAboutData = {
      id: 1,
      role: 'Mock Role',
      city: 'Mock City',
      from: 'Mock From',
      birthDate: '1992-10-02',
      startedWorkDate: '2015-01-12',
      degree: 'Mock Degree',
      employment: 'Mock Employment',
      workplace: 'Mock Workplace',
      topParagraph: 'Mock TopParagraph',
      bottomParagraph: 'Mock BottomParagraph',
      profileImageUrl: 'Mock ProfileImageUrl',
    };
    spyOn(aboutService, 'getAbout').and.returnValue(of(mockAboutData));

    component.ngOnInit();

    expect(component.about).toEqual(mockAboutData);
  });

  it('should replace #YEARS_OF_EXPERIENCE# in topParagraph', () => {
    const mockAboutData = {
      topParagraph: 'Started working #YEARS_OF_EXPERIENCE# years ago',
      startedWorkDate: '2015-01-12',
    } as About;
    spyOn(aboutService, 'getAbout').and.returnValue(of(mockAboutData));
    spyOn(aboutService, 'calculateYearsOfExperience').and.returnValue(5);

    component.ngOnInit();

    expect(component.about).toBeTruthy();
    expect(component.about?.topParagraph).toContain('Started working 5 years ago');
  });

  it('should calculate age correctly', () => {
    const mockAboutData = { birthDate: '1992-10-02' } as About;
    spyOn((component as any).aboutService, 'calculateAge').and.returnValue(30);
    component.about = mockAboutData;

    const age = component.getAge();

    expect(age).toEqual(30);
  });

  /*
   * Negative tests
   */

  // TODO: do negative tests

  /*
   * Edge case tests
   */

  // TODO: do edge case tests
});
