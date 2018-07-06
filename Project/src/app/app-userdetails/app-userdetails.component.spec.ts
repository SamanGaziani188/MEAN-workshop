import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserdetailsComponent } from './app-userdetails.component';

describe('AppUserdetailsComponent', () => {
  let component: AppUserdetailsComponent;
  let fixture: ComponentFixture<AppUserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
