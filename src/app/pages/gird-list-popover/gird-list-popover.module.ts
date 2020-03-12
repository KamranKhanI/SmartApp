import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirdListPopoverPageRoutingModule } from './gird-list-popover-routing.module';

import { GirdListPopoverPage } from './gird-list-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GirdListPopoverPageRoutingModule
  ],
  declarations: [GirdListPopoverPage]
})
export class GirdListPopoverPageModule {}
