import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MipaginadosPageRoutingModule } from './mipaginados-routing.module';

import { MipaginadosPage } from './mipaginados.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MipaginadosPageRoutingModule
  ],
  declarations: [MipaginadosPage]
})
export class MipaginadosPageModule {}
