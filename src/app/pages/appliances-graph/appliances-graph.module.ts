import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliancesGraphPageRoutingModule } from './appliances-graph-routing.module';

import { AppliancesGraphPage } from './appliances-graph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliancesGraphPageRoutingModule
  ],
  declarations: [AppliancesGraphPage]
})
export class AppliancesGraphPageModule {}
