import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeManagementPageRoutingModule } from './home-management-routing.module';

import { HomeManagementPage } from './home-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeManagementPageRoutingModule
  ],
  declarations: [HomeManagementPage]
})
export class HomeManagementPageModule {}
