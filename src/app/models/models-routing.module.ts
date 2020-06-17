import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsPage } from './models.page';

const routes: Routes = [
  {
    path: '',
    component: ModelsPage
  },
  {
    path: 'model-detail',
    loadChildren: () => import('./model-detail/model-detail.module').then( m => m.ModelDetailPageModule)
  },
  {
    path: 'new-model',
    loadChildren: () => import('./new-model/new-model.module').then( m => m.NewModelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelsPageRoutingModule {}
