import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanderNavComponent } from './comander-nav.component';

describe('ComanderNavComponent', () => {
  let component: ComanderNavComponent;
  let fixture: ComponentFixture<ComanderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComanderNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
