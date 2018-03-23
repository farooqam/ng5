/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoPriceDataComponent } from './noPriceData.component';

describe('NoPriceDataComponent', () => {
  let component: NoPriceDataComponent;
  let fixture: ComponentFixture<NoPriceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPriceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPriceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
