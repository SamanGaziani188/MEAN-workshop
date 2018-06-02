import { Component } from '@angular/core';
import {AppService} from './services/app.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  color = "blue" ; 


  setInputColor(color)
  {
    this.color = color;
  }
}