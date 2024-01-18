import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Model1Page } from './model1.page';

const routes: Routes = [
  {
    path: '',
    component: Model1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Model1PageRoutingModule {}
