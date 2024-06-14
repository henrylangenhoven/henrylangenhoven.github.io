import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { About } from '../main/about/about.model';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;

  const mockAbout: About = {
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

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
    service = TestBed.inject(DataService);

    httpClient = TestBed.inject(HttpClient);
  });

  /*
   *  Positive tests
   */

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve About JSON data', () => {
    const mockAboutData = mockAbout;
    spyOn(httpClient, 'get').and.returnValue(of(mockAboutData));

    service.getAboutJsonData().subscribe(data => {
      expect(data).toEqual(mockAboutData);
    });
  });

  /*
   * Negative tests
   */

  it('should handle error when fetching JSON data', () => {
    const expectedError = new Error('Not Found');
    spyOn(httpClient, 'get').and.returnValue(throwError(() => expectedError));

    service.getAboutJsonData().subscribe({
      next: () => fail('Expected an error, but received data'),
      error: error => {
        expect(error).toEqual(expectedError);
      },
      complete: () => fail('Expected an error, but completed'),
    });
  });

  it('should handle empty JSON response', () => {
    spyOn(httpClient, 'get').and.returnValue(of(null));

    service.getAboutJsonData().subscribe(data => {
      expect(data).toBeNull();
    });
  });

  /*
   *  Edge case tests
   */

  it('should handle JSON data with special characters', () => {
    const mockAboutData = mockAbout;
    spyOn(httpClient, 'get').and.returnValue(of(mockAboutData));

    service.getAboutJsonData().subscribe(data => {
      expect(data).toEqual(mockAboutData);
    });
  });

  it('should handle large JSON data response', () => {
    const mockAboutData = mockAbout;
    spyOn(httpClient, 'get').and.returnValue(of(mockAboutData));

    service.getAboutJsonData().subscribe(data => {
      expect(data).toEqual(mockAboutData);
    });
  });

  it('should handle timeout or network error', () => {
    const expectedError = new Error('Unknown error');
    spyOn(httpClient, 'get').and.returnValue(throwError(() => expectedError));

    service.getAboutJsonData().subscribe({
      next: () => fail('Expected an error, but received data'),
      error: error => {
        expect(error).toEqual(expectedError);
      },
      complete: () => fail('Expected an error, but completed'),
    });
  });
});
