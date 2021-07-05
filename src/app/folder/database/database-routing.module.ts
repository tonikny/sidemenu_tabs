import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabasePage } from './database.page';

const routes: Routes = [
  {
    path: '',
    component: DatabasePage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
      },
      {
        path: 'update/:id',
        loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabasePageRoutingModule {}
