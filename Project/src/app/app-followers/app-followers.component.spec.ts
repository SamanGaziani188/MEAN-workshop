import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFollowersComponent } from './app-followers.component';

describe('AppFollowersComponent', () => {
  let component: AppFollowersComponent;
  let fixture: ComponentFixture<AppFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
