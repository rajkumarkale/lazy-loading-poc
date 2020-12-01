import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerAdminComponent } from './server-admin/server-admin.component';
import {ServerAdminRoutingModule} from './server-admin-routing.module';



@NgModule({
  declarations: [ServerAdminComponent],
  imports: [
    CommonModule,
    ServerAdminRoutingModule
  ]
})
export class ServerAdminModule { }
