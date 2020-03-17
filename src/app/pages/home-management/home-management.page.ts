import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home-management',
  templateUrl: './home-management.page.html',
  styleUrls: ['./home-management.page.scss'],
})
export class HomeManagementPage implements OnInit {

  constructor(private navControler:NavController) { }

  ngOnInit() {
  }

  addHome(){

    this.navControler.navigateForward('add-home')
  }

  gotoHomeSetting(){
    this.navControler.navigateForward('home-settings')
  }

}
