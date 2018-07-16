import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodoinputComponent } from './app-todoinput.component';

describe('AppTodoinputComponent', () => {
  let component: AppTodoinputComponent;
  let fixture: ComponentFixture<AppTodoinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTodoinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTodoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
