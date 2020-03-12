import { Component, OnInit } from '@angular/core';


interface Temperature {
  value: string;
  viewValue: string;
}
interface Humidity {
  value: string;
  viewValue: string;
}
interface Pressure {
  value: string;
  viewValue: string;
}
interface Speed {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-weather-updates',
  templateUrl: './weather-updates.page.html',
  styleUrls: ['./weather-updates.page.scss'],
})
export class WeatherUpdatesPage implements OnInit {
 
  temperature: Temperature[] = [
    {value: 'C', viewValue: 'C'},
    {value: 'C', viewValue: 'F'},
  ];


  humidity: Humidity[] = [
    {value: '%', viewValue: '%'},
    
  ];

  pressure: Pressure[] = [
    {value: 'inHg', viewValue: 'inHg'},
    {value: 'mb', viewValue: 'mb'},
    {value: 'hPa', viewValue: 'hPa'},
    {value: 'mmHg', viewValue: 'mmHg'},
  ];

  speed: Speed[] = [
    {value: 'ms', viewValue: 'm/s'},
    {value: 'kph', viewValue: 'kph'},
    {value: 'mph', viewValue: 'mph'},
    {value: 'kmh', viewValue: 'km/h'},
  ];





  constructor() { }

  ngOnInit() {
  }

}
