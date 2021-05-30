import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotDroneControlComponent } from './pilot-drone-control.component';

describe('PilotDroneControlComponent', () => {
  let component: PilotDroneControlComponent;
  let fixture: ComponentFixture<PilotDroneControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotDroneControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotDroneControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
