import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecoverpassPage } from './recoverpass.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverpassPageRoutingModule {}
