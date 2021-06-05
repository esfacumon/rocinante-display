import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderAirlockComponent } from './comander-airlock.component';

describe('ComanderAirlockComponent', () => {
  let component: ComanderAirlockComponent;
  let fixture: ComponentFixture<ComanderAirlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComanderAirlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderAirlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
