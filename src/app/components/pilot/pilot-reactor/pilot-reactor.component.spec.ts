import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotReactorComponent } from './pilot-reactor.component';

describe('PilotReactorComponent', () => {
  let component: PilotReactorComponent;
  let fixture: ComponentFixture<PilotReactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotReactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotReactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
