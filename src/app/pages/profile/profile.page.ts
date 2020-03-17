import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navController:NavController) { }

  ngOnInit() {
  }
  gotoMessages(){

    this.navController.navigateForward('messages')
  }
  gotoAddHome(){
    this.navController.navigateForward('home-management')
  }
}
