import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.page.html',
  styleUrls: ['./home-settings.page.scss'],
})
export class HomeSettingsPage implements OnInit {

  constructor(private navControler:NavController) { }

  ngOnInit() {
  }

  addMember(){
    this.navControler.navigateForward('add-member')

  }

}
