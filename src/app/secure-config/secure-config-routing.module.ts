import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SecureConfigComponent} from './secure-config/secure-config.component';



const routes: Routes = [
  {
    path: '',
    component: SecureConfigComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecureConfigRoutingModule { }
