import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from "@ionic/angular";
import { NgModule ,ViewEncapsulation} from '@angular/core';
 
@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
  encapsulation: ViewEncapsulation.None  // *** This line disables the view encapsulation
})
export class DevicesPage implements OnInit {

  constructor(private navController:NavController,private popoverController:PopoverController) { }

  ngOnInit() {
  }
 
  locationpage(){
    

    this.navController.navigateForward('location')
  }

  gotoPower(){
    this.navController.navigateForward('power')
  }



  
//  async openGL_view(ev: any) {
//     const popover = await this.popoverController.create({
//       component: GridlistComponent,
//       event: ev,
//       translucent: true
//     });
//     return await popover.present();
//   }
}
