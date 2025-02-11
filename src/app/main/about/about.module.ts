import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  exports: [AboutComponent],
  imports: [CommonModule, AboutComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AboutModule {}
