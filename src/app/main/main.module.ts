import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [CommonModule, AboutModule, MainComponent],
  exports: [MainComponent, AboutModule],
})
export class MainModule {}
