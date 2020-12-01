import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelAdminComponent } from './model-admin/model-admin.component';
import {ModelAdminRoutingModule} from './model-admin-routing.module';



@NgModule({
  declarations: [ModelAdminComponent],
  imports: [
    CommonModule,
    ModelAdminRoutingModule
  ]
})
export class ModelAdminModule { }
