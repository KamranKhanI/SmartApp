import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHomePageRoutingModule } from './add-home-routing.module';

import { AddHomePage } from './add-home.page';
import {MatInputModule} from '@angular/material/input';

import { AppMaterialModule } from "../../app-material/app-material.module";
import { MatFormFieldModule, MatIconModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHomePageRoutingModule,
   AppMaterialModule,
   MatFormFieldModule,
   MatInputModule,
   MatIconModule,
   MatCheckboxModule
  ],
  declarations: [AddHomePage]
})
export class AddHomePageModule {}
