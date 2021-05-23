import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderComsComponent } from './comander-coms.component';

describe('ComanderComsComponent', () => {
  let component: ComanderComsComponent;
  let fixture: ComponentFixture<ComanderComsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComanderComsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderComsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
