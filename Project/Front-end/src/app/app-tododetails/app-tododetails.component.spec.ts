import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTododetailsComponent } from './app-tododetails.component';

describe('AppTododetailsComponent', () => {
  let component: AppTododetailsComponent;
  let fixture: ComponentFixture<AppTododetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTododetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTododetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
