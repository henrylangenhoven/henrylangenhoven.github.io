import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js'; // TODO: remove `src/assets/vendor/typed.js/typed.js` as this was replaced by `npm install typed.js`

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  // TODO: move name and dataItems to a service
  name = 'Henry Langenhoven';

  dataItems = [
    'a Software Engineer',
    'a Java Developer',
    'Spring Certified',
    'an Angular Enthusiast',
    'a Full Stack Developer',
    'a Certified Kubernetes Application Developer',
  ];

  ngOnInit() {
    /**
     * Hero type effect
     */
    new Typed('.typed', {
      strings: this.getDataItems(),
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  getDataItems(): string[] {
    return this.dataItems;
  }
}
