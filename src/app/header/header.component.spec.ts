import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent, HeaderLink } from './header.component';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct number of links', () => {
    expect(component.links.length).toEqual(3);
  });

  it('should have correct link names', () => {
    const expectedNames = ['About', 'Resume', 'Contact'];
    const actualNames = component.links.map((link: HeaderLink) => link.name);
    expect(actualNames).toEqual(expectedNames);
  });

  it('should scroll to top when scrollToTop is called', () => {
    const scrollSpy = spyOn(window, 'scrollTo');
    component.scrollToTop();
    expect(scrollSpy).toHaveBeenCalled();
  });

  it('should return true if the current hash matches the passed url', () => {
    window.location.hash = '#about';
    expect(component.isRouterLinkActive('#about')).toBeTrue();
  });

  it('should return false if the current hash does not match the passed url', () => {
    window.location.hash = '#about';
    expect(component.isRouterLinkActive('#contact')).toBeFalse();
  });
});
