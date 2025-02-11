import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';

@NgModule({
  imports: [CommonModule, ResumeComponent],
  exports: [ResumeComponent],
})
export class ResumeModule {}
