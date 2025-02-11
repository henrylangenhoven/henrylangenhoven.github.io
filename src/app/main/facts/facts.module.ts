import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsComponent } from './facts.component';

@NgModule({
  imports: [CommonModule, FactsComponent],
  exports: [FactsComponent],
})
export class FactsModule {}
