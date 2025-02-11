import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [CommonModule, ContactComponent],
  exports: [ContactComponent],
})
export class ContactModule {}
