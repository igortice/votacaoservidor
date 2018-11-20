import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';

@NgModule({
  declarations: [ LayoutComponent, LayoutHeaderComponent, LayoutFooterComponent, LayoutMainComponent ],
  imports:      [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports:      [
    LayoutComponent
  ]
})
export class CoreModule {}
