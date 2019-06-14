import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thietbi1Component } from './thietbi1.component';

describe('Thietbi1Component', () => {
  let component: Thietbi1Component;
  let fixture: ComponentFixture<Thietbi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thietbi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thietbi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
