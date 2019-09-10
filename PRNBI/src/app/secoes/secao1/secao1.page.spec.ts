import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao1Page } from './secao1.page';

describe('Secao1Page', () => {
  let component: Secao1Page;
  let fixture: ComponentFixture<Secao1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
