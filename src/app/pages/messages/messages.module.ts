import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessagesPage } from './messages.page';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [MessagesPage]
})
export class MessagesPageModule {}
