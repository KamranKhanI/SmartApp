import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [

{


  path:'',
  component:HomePage,
  children:[
    {
         path:'tab3',
          children:[
            {
              path:'',
              loadChildren:()=>
              import('../pages/profile/profile.module').then(m=>m.ProfilePageModule)
            }
          ]
        },
        {
          path:'tab2',
           children:[
             {
               path:'',
               loadChildren:()=>
               import('../pages/rooms/rooms.module').then(m=>m.RoomsPageModule)
             }
           ]
         },
         {
          path:'tab1',
           children:[
             {
               path:'',
               loadChildren:()=>
               import('../pages/devices/devices.module').then(m=>m.DevicesPageModule)
             }
           ]
         },
         {
                path:'',
                redirectTo:'/home/tab1',
                pathMatch:'full'
              }
  ]



},
{
  path: '',
  redirectTo: '/home/tab1',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
