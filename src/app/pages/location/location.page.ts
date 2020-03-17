import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private navController:NavController) { }

  ngOnInit() {
  }

  weatherupdate(){
    this.navController.navigateForward('weather-updates')
  }
}
