import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegisterVisitorsComponent } from './modal-register-visitors.component';

describe('ModalRegisterVisitorsComponent', () => {
  let component: ModalRegisterVisitorsComponent;
  let fixture: ComponentFixture<ModalRegisterVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegisterVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegisterVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
