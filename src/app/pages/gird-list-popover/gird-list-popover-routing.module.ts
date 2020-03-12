import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirdListPopoverPage } from './gird-list-popover.page';

const routes: Routes = [
  {
    path: '',
    component: GirdListPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirdListPopoverPageRoutingModule {}
