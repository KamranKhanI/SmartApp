import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

  constructor(private rounter:Router) { }

  ngOnInit() {
  }
  locationpage(){
    console.log("working from location")

    this.rounter.navigate(['location'])
  }
}
