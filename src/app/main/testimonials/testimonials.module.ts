import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials.component';

@NgModule({
  imports: [CommonModule, TestimonialsComponent],
  exports: [TestimonialsComponent],
})
export class TestimonialsModule {}
