import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./pages/devices/devices.module').then( m => m.DevicesPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'weather-updates',
    loadChildren: () => import('./pages/weather-updates/weather-updates.module').then( m => m.WeatherUpdatesPageModule)
  },
  {
    path: 'gird-list-popover',
    loadChildren: () => import('./pages/gird-list-popover/gird-list-popover.module').then( m => m.GirdListPopoverPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'notification-settings',
    loadChildren: () => import('./pages/notification-settings/notification-settings.module').then( m => m.NotificationSettingsPageModule)
  },
  {
    path: 'home-management',
    loadChildren: () => import('./pages/home-management/home-management.module').then( m => m.HomeManagementPageModule)
  },
  
  {
    path: 'add-home',
    loadChildren: () => import('./pages/add-home/add-home.module').then( m => m.AddHomePageModule)
  },
  {
    path: 'home-settings',
    loadChildren: () => import('./pages/home-settings/home-settings.module').then( m => m.HomeSettingsPageModule)
  },
  {
    path: 'add-member',
    loadChildren: () => import('./pages/add-member/add-member.module').then( m => m.AddMemberPageModule)
  },
  
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'rooms-management',
    loadChildren: () => import('./pages/rooms-management/rooms-management.module').then( m => m.RoomsManagementPageModule)
  },
  {
    path: 'map-location',
    loadChildren: () => import('./pages/map-location/map-location.module').then( m => m.MapLocationPageModule)
  },
  {
    path: 'home-member-detail',
    loadChildren: () => import('./pages/home-member-detail/home-member-detail.module').then( m => m.HomeMemberDetailPageModule)
  },
  {
    path: 'power',
    loadChildren: () => import('./pages/power/power.module').then( m => m.PowerPageModule)
  },
  {
    path: 'cost-graph',
    loadChildren: () => import('./pages/cost-graph/cost-graph.module').then( m => m.CostGraphPageModule)
  },
  {
    path: 'appliances-graph',
    loadChildren: () => import('./pages/appliances-graph/appliances-graph.module').then( m => m.AppliancesGraphPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
