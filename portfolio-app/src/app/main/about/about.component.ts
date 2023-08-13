import { Component } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  about = this.aboutService.getAbout();

  constructor(private aboutService: AboutService) {}
}
