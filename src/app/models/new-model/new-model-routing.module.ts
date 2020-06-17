import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewModelPage } from './new-model.page';

const routes: Routes = [
  {
    path: '',
    component: NewModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewModelPageRoutingModule {}
