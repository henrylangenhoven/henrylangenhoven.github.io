import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about?: About;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(about => {
      about = {
        ...about,
        topParagraph: about.topParagraph.replace(
          '#YEARS_OF_EXPERIENCE#',
          this.aboutService.calculateYearsOfExperience(about.startedWorkDate).toString()
        ),
      };
      this.about = about;
    });
  }

  getAge(): number {
    if (!this.about) return 0;
    return this.aboutService.calculateAge(this.about.birthDate);
  }
}
