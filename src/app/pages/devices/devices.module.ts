import { NgModule ,ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPageRoutingModule } from './devices-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { DevicesPage } from './devices.page';
import { GridlistComponent } from 'src/app/components/gridlist/gridlist.component';


@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesPageRoutingModule,
    MatSelectModule,

  ],
  declarations: [DevicesPage]
})
export class DevicesPageModule {}
