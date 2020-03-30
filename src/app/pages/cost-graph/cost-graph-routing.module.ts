import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostGraphPage } from './cost-graph.page';

const routes: Routes = [
  {
    path: '',
    component: CostGraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostGraphPageRoutingModule {}
