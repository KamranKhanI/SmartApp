import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherUpdatesPage } from './weather-updates.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherUpdatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherUpdatesPageRoutingModule {}
