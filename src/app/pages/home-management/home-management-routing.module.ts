import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeManagementPage } from './home-management.page';

const routes: Routes = [
  {
    path: '',
    component: HomeManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeManagementPageRoutingModule {}
