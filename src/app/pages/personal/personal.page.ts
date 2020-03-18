import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {


  name:string='mynicname'

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }
  async changeName(){

    const alert = await this.alertController.create({
      header: 'Nickname',
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
            this.name=data.name
          }
        }
      ]

    }
    )

    await alert.present();
  }
}
