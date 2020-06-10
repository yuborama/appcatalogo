import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'models',
    pathMatch: 'full'
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
  },
  {
    path: 'models',
      children:[
        {
          path: "",
          loadChildren: () => import('./models/models.module').then( m => m.ModelsPageModule)
        },
        {
          path:":modelId",
          loadChildren:() => import('./models/model-detail/model-detail.module').then(m=>m.ModelDetailPageModule)
        }
      ]

    
  },
  {
    path: 'materials',
    loadChildren: () => import('./materials/materials.module').then( m => m.MaterialsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
