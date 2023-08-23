import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { About } from '../main/about/about.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAboutJsonData(): Observable<About> {
    return this.http.get<About>('assets/data/henry.langenhoven.about.json');
  }
}
