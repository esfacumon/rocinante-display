import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotDockingComponent } from './pilot-docking.component';

describe('PilotDockingComponent', () => {
  let component: PilotDockingComponent;
  let fixture: ComponentFixture<PilotDockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotDockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotDockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
