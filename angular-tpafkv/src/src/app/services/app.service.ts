import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class AppService {
  $colorBoxSubject: BehaviorSubject<string> = new BehaviorSubject('#dcdcdc');

  $colorCircleSubject: BehaviorSubject<string> = new BehaviorSubject('blue');
  $boxColor: Observable<string>;
  $circleColor: Observable<string>;
  constructor() {
       this.$boxColor = this.$colorBoxSubject.asObservable();
    this.$circleColor = this.$colorCircleSubject.asObservable();
  }

}