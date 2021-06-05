import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunnerCountermeasuresComponent } from './gunner-countermeasures.component';

describe('GunnerCountermeasuresComponent', () => {
  let component: GunnerCountermeasuresComponent;
  let fixture: ComponentFixture<GunnerCountermeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunnerCountermeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunnerCountermeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
