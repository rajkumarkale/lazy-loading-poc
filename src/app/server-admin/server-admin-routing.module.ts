import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServerAdminComponent} from './server-admin/server-admin.component';


const routes: Routes = [
  {
    path: '',
    component: ServerAdminComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServerAdminRoutingModule { }
