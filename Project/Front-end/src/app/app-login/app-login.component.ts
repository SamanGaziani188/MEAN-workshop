import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  functionLogin() {
    this.router.navigate(['/user']);
  }

}
