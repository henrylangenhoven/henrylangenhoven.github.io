import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChild('about') about!: ElementRef;
  @ViewChild('resume') resume!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectAbout = this.about.nativeElement.getBoundingClientRect();
    const boundingRectResume = this.resume.nativeElement.getBoundingClientRect();
    const boundingRectContact = this.contact.nativeElement.getBoundingClientRect();

    alert('testing');
    // TODO: wip
    if (boundingRectAbout.top >= 0 && boundingRectAbout.bottom <= windowHeight) {
      setTimeout(() => {
        alert('boundingRectAbout');
      }, 500);
    }
    if (boundingRectResume.top >= 0 && boundingRectResume.bottom <= windowHeight) {
      setTimeout(() => {
        alert('boundingRectResume');
      }, 500);
    }
    if (boundingRectContact.top >= 0 && boundingRectContact.bottom <= windowHeight) {
      setTimeout(() => {
        alert('boundingRectContact');
      }, 500);
    } else {
      alert('else ');
    }
  }
}
