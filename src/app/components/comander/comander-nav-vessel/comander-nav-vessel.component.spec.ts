import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderNavVesselComponent } from './comander-nav-vessel.component';

describe('ComanderNavVesselComponent', () => {
  let component: ComanderNavVesselComponent;
  let fixture: ComponentFixture<ComanderNavVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComanderNavVesselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderNavVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
