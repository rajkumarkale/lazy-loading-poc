import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ModelAdminComponent} from './model-admin/model-admin.component';



const routes: Routes = [
  {
    path: '',
    component: ModelAdminComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModelAdminRoutingModule { }
