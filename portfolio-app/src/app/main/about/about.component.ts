import { Component } from '@angular/core';
import { AboutService } from './about.service';
import { Observable } from 'rxjs';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  about: Observable<About> = this.aboutService.getAbout();

  constructor(private aboutService: AboutService) {}
}
