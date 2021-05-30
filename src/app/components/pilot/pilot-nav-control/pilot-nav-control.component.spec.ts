import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotNavControlComponent } from './pilot-nav-control.component';

describe('PilotNavControlComponent', () => {
  let component: PilotNavControlComponent;
  let fixture: ComponentFixture<PilotNavControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotNavControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotNavControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
