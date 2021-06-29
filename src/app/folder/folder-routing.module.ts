import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'tests',
        loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'database/list',
        loadChildren: () => import('./database/list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'database/create',
        loadChildren: () => import('./database/create/create.module').then( m => m.CreatePageModule)
      },
      {
        path: 'database/update/:id',
        loadChildren: () => import('./database/update/update.module').then( m => m.UpdatePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
