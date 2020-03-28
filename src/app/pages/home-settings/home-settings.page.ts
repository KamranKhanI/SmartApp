import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from "@ionic/angular";
@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.page.html',
  styleUrls: ['./home-settings.page.scss'],
})
export class HomeSettingsPage implements OnInit {

  houseName:string='My Sweet House !'

  constructor(private navControler:NavController,private alertController:AlertController) { }

  ngOnInit() {
  }

  addMember(){
    this.navControler.navigateForward('add-member')

  }

  async changeHouseName(){
    const alert = await this.alertController.create({
      header: 'House Name',
      inputs: [
        {
          name: 'name',
          type: 'text',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'warning',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler:  data=> {
            this.houseName=data.name
          }
        }
      ]

    }
    )

    await alert.present();
  }

  gotoRoomsManagement(){
    this.navControler.navigateForward('rooms-management')
  }

  gotoMapLocation(){
    this.navControler.navigateForward('map-location')
  }



  gotoRoomMemberDetail(){
    this.navControler.navigateForward('home-member-detail')
  }

}
