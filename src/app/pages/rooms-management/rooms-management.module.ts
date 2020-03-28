import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsManagementPageRoutingModule } from './rooms-management-routing.module';

import { RoomsManagementPage } from './rooms-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsManagementPageRoutingModule
  ],
  declarations: [RoomsManagementPage]
})
export class RoomsManagementPageModule {}
