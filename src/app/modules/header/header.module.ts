import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './components/site-header/site-header.component';

@NgModule({
  declarations: [SiteHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SiteHeaderComponent
  ]
})
export class HeaderModule { }
