import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsComponent } from './facts.component';

@NgModule({
  declarations: [FactsComponent],
  imports: [CommonModule],
  exports: [FactsComponent],
})
export class FactsModule {}
