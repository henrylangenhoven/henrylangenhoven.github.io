import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { About } from '../main/about/about.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getAboutJsonData(): Observable<About> {
    return this.http.get<About>('assets/data/henry.langenhoven.about.json');
  }
}
