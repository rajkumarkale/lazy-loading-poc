import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '', children: [
      {path: '', pathMatch: 'full', redirectTo: 'login' },
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      {path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
      {path: 'secureConfig', loadChildren: () => import('./secure-config/secure-config.module').then(m => m.SecureConfigModule) },
      {path: 'modelAdmin', loadChildren: () => import('./model-admin/model-admin.module').then(m => m.ModelAdminModule) },
      {path: 'serverAdmin', loadChildren: () => import('./server-admin/server-admin.module').then(m => m.ServerAdminModule) },
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // }
    ]
  }
];


// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
