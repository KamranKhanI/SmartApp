import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostGraphPageRoutingModule } from './cost-graph-routing.module';

import { CostGraphPage } from './cost-graph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostGraphPageRoutingModule
  ],
  declarations: [CostGraphPage]
})
export class CostGraphPageModule {}
