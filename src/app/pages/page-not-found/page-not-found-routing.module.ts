import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundIndexComponent } from './page-not-found-index/page-not-found-index.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundIndexComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PageNotFoundRoutingModule {}
