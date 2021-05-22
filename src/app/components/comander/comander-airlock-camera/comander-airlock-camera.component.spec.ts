import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderAirlockCameraComponent } from './comander-airlock-camera.component';

describe('ComanderAirlockCameraComponent', () => {
  let component: ComanderAirlockCameraComponent;
  let fixture: ComponentFixture<ComanderAirlockCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComanderAirlockCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderAirlockCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
