import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router} from '@angular/router'

import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  color: ThemePalette = 'primary';
  mode:MatProgressBarModule = 'determinate';
  value = 50;
  bufferValue = 75

  
  constructor( private rounter:Router) { }

  ngOnInit() {
  }



  locationpage(){
    console.log("working from location")

    this.rounter.navigate(['location'])
  }

  gotoProfile(){
    this.rounter.navigate(['profile'])
  }


}
