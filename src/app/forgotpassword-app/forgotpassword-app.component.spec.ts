import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordAppComponent } from './forgotpassword-app.component';

describe('ForgotpasswordAppComponent', () => {
  let component: ForgotpasswordAppComponent;
  let fixture: ComponentFixture<ForgotpasswordAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpasswordAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
