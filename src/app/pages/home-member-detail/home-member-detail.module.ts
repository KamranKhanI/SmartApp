import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMemberDetailPageRoutingModule } from './home-member-detail-routing.module';

import { HomeMemberDetailPage } from './home-member-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMemberDetailPageRoutingModule
  ],
  declarations: [HomeMemberDetailPage]
})
export class HomeMemberDetailPageModule {}
