import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserpageComponent } from './app-userpage.component';

describe('AppUserpageComponent', () => {
  let component: AppUserpageComponent;
  let fixture: ComponentFixture<AppUserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
