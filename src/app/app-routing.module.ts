import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
