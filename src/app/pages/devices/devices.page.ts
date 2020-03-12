import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import { Router } from '@angular/router';
import { NgModule ,ViewEncapsulation} from '@angular/core';
 
@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
  encapsulation: ViewEncapsulation.None  // *** This line disables the view encapsulation
})
export class DevicesPage implements OnInit {

  constructor(private rounter:Router,private popoverController:PopoverController) { }

  ngOnInit() {
  }
 
  locationpage(){
    console.log("working from location")

    this.rounter.navigate(['location'])
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
