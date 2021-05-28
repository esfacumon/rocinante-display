import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotDroneComponent } from './pilot-drone.component';

describe('PilotDroneComponent', () => {
  let component: PilotDroneComponent;
  let fixture: ComponentFixture<PilotDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotDroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
