import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderCombatComponent } from './comander-combat.component';

describe('ComanderCombatComponent', () => {
  let component: ComanderCombatComponent;
  let fixture: ComponentFixture<ComanderCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComanderCombatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
