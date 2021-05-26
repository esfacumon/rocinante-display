import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotNavComponent } from './pilot-nav.component';

describe('PilotNavComponent', () => {
  let component: PilotNavComponent;
  let fixture: ComponentFixture<PilotNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
