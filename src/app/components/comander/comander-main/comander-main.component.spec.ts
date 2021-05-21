import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderMainComponent } from './comander-main.component';

describe('ComanderMainComponent', () => {
  let component: ComanderMainComponent;
  let fixture: ComponentFixture<ComanderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComanderMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
