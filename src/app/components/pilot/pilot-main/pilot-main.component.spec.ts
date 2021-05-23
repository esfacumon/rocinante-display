import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotMainComponent } from './pilot-main.component';

describe('PilotMainComponent', () => {
  let component: PilotMainComponent;
  let fixture: ComponentFixture<PilotMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
