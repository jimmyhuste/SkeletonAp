import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MipaginadosPage } from './mipaginados.page';

const routes: Routes = [
  {
    path: '',
    component: MipaginadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MipaginadosPageRoutingModule {}
