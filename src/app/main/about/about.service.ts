import { Injectable, inject } from '@angular/core';
import { DataService } from '../../util/data.service';
import { About } from './about.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private jsonService = inject(DataService);

  aboutData: Observable<About> = this.jsonService.getAboutJsonData();

  getAbout(): Observable<About> {
    return this.aboutData;
  }

  calculateAge(birthday: string): number {
    return this.calculateYearsSince(birthday);
  }

  calculateYearsOfExperience(startedWorkingDay: string): number {
    return this.calculateYearsSince(startedWorkingDay);
  }

  private calculateYearsSince(dateString: string): number {
    const currentDate = new Date();
    const otherDate = new Date(dateString);

    if (isNaN(otherDate.getTime())) {
      throw new Error('Invalid date format');
    }

    let result = currentDate.getFullYear() - otherDate.getFullYear();

    if (
      currentDate.getMonth() < otherDate.getMonth() ||
      (currentDate.getMonth() === otherDate.getMonth() && currentDate.getDate() < otherDate.getDate())
    ) {
      result--;
    }

    return result;
  }
}
