import { TestBed } from '@angular/core/testing';

import { AboutService } from './about.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AboutService', () => {
  let service: AboutService;
  const mockedCurrentDate = '2023-08-13';

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
    service = TestBed.inject(AboutService);

    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(mockedCurrentDate));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have about', () => {
    expect(service.getAbout()).toBeTruthy();
  });

  /*
   *  Positive tests
   */

  it('should calculate age', () => {
    expect(service.calculateAge('1992-10-02')).toBeGreaterThan(0);
  });

  it('should calculate age correctly', () => {
    const birthday = '1990-08-13'; // Assuming today's date is 2023-08-13
    const age = service.calculateAge(birthday);
    expect(age).toBe(33);
  });

  it('should calculate years of experience', () => {
    expect(service.calculateYearsOfExperience('2015-01-12')).toBeGreaterThan(0);
  });

  it('should calculate years of experience correctly', () => {
    const startedWorkingDay = '2010-01-01'; // Assuming today's date is 2023-08-13
    const yearsOfExperience = service.calculateYearsOfExperience(startedWorkingDay);
    expect(yearsOfExperience).toBe(13);
  });

  /*
   * Negative tests
   */
  it('should handle invalid date format for calculating age', () => {
    const invalidDate = 'invalid-date';
    expect(() => service.calculateAge(invalidDate)).toThrowError();
  });

  it('should handle invalid date format for calculating years of experience', () => {
    const invalidDate = 'invalid-date';
    expect(() => service.calculateYearsOfExperience(invalidDate)).toThrowError();
  });

  /*
   * Edge case tests
   */
  it('should handle calculating age on the same date', () => {
    const birthday = mockedCurrentDate; // Assuming today's date is 2023-08-13
    const age = service.calculateAge(birthday);
    expect(age).toBe(0);
  });

  it('should handle calculating years of experience on the same date', () => {
    const startedWorkingDay = mockedCurrentDate; // Assuming today's date is 2023-08-13
    const yearsOfExperience = service.calculateYearsOfExperience(startedWorkingDay);
    expect(yearsOfExperience).toBe(0);
  });

  it('should handle calculating age on a leap year birthday', () => {
    const birthday = '2000-02-29'; // Leap year
    const age = service.calculateAge(birthday);
    // The expected age would depend on the current date.
    // Adjust the expected value accordingly.
    expect(age).toBe(23);
  });

  it('should handle calculating years of experience on a leap year start date', () => {
    const startedWorkingDay = '2000-02-29'; // Leap year
    const yearsOfExperience = service.calculateYearsOfExperience(startedWorkingDay);
    // The expected years of experience would depend on the current date.
    // Adjust the expected value accordingly.
    expect(yearsOfExperience).toBe(23);
  });
});
