import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunnerWeaponsComponent } from './gunner-weapons.component';

describe('GunnerWeaponsComponent', () => {
  let component: GunnerWeaponsComponent;
  let fixture: ComponentFixture<GunnerWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunnerWeaponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunnerWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
