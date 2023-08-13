import { TestBed } from '@angular/core/testing';

import { AboutService } from './about.service';

describe('AboutService', () => {
  let service: AboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have about', () => {
    expect(service.getAbout()).toBeTruthy();
  });

  // test calculatateAge()
  it('should calculate age', () => {
    expect(service.calculateAge('1992-10-02')).toBeGreaterThan(0);
  });
});
