import { Component, OnInit } from '@angular/core';



interface roles {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  role: roles[] = [
    {value: 'commonmember', viewValue: 'Common Member'},
    {value: 'admin', viewValue: 'Administration'},
  ];


}
