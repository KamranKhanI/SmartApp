import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMemberDetailPage } from './home-member-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMemberDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMemberDetailPageRoutingModule {}
