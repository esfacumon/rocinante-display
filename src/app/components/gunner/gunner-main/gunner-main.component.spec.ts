import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunnerMainComponent } from './gunner-main.component';

describe('GunnerMainComponent', () => {
  let component: GunnerMainComponent;
  let fixture: ComponentFixture<GunnerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunnerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunnerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
