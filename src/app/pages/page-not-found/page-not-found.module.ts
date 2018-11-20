import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundIndexComponent } from './page-not-found-index/page-not-found-index.component';

@NgModule({
  declarations: [ PageNotFoundIndexComponent ],
  imports:      [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule {}
