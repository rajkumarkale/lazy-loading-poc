import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureConfigComponent } from './secure-config/secure-config.component';
import {SecureConfigRoutingModule} from './secure-config-routing.module';



@NgModule({
  declarations: [SecureConfigComponent],
  imports: [
    CommonModule,
    SecureConfigRoutingModule
  ]
})
export class SecureConfigModule { }
