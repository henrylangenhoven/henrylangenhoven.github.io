import { Injectable } from '@angular/core';

export interface About {
  id: number;
  role: string;
  city: string;
  from: string;
  age: number;
  degree: string;
  employment: string;
  workplace: string;
  topParagraph: string;
  bottomParagraph: string;
  profileImageUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  // constructor() {}

  getAbout(): About {
    return {
      id: 1,
      role: 'Senior Software Engineer & Full Stack Developer',
      city: 'Utrecht, The Netherlands',
      from: 'Pretoria, South Africa',
      age: this.calculateAge('1992-10-02'),
      degree: 'Bachelor Degree of Computing',
      employment: 'Permanent',
      workplace: 'Hybrid',
      topParagraph:
        'As a Senior Software Engineer with over 8 years of total experience, I bring a wealth of experience in building full-stack solutions and leading both new and existing projects. My expertise lies in backend development with Java and Spring Framework, as well as frontend development with Angular. I prefer to work with modern containerized microservice environments, and strive to modernize existing systems to adopt containerization.',
      bottomParagraph:
        'I am an energetic team player and effective communicator, proficient in leading Agile Scrum teams. I am\n' +
        '          passionate about taking on challenges that can have a positive impact on the world and strive to deliver\n' +
        '          excellent quality, maintainable solutions that meet requirements and deadlines.\n' +
        '          <br />\n' +
        '          Overall, my experience and skills make me a valuable asset to any team looking for a results-driven and\n' +
        '          passionate Senior Software Engineer.',
      profileImageUrl: 'assets/img/Henry Team Rockstars Profile Pic 2023.jpg',
    };
  }

  calculateAge(birthdate: string): number {
    const birthday = new Date(birthdate);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
