import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

export interface HeaderLink {
  name: string;
  url: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgFor, NgClass],
})
export class HeaderComponent {
  links: HeaderLink[] = [
    {
      name: 'About',
      url: '#about',
      icon: 'bx-user',
    },
    {
      name: 'Resume',
      url: '#resume',
      icon: 'bx-file',
    },
    {
      name: 'Contact',
      url: '#contact',
      icon: 'bx-envelope',
    },
    // TODO: 'Services', 'Skills', 'Certifications', 'Facts', 'Portfolio', 'Testimonials',
  ];

  scrollToTop() {
    scrollTo({ top: 0, behavior: 'smooth' });
  }

  isRouterLinkActive(url: string) {
    // return true;
    return window.location.hash === url;
  }
}
