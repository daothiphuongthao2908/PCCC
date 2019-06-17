import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietquantriComponent } from './chitietquantri.component';

describe('ChitietquantriComponent', () => {
  let component: ChitietquantriComponent;
  let fixture: ComponentFixture<ChitietquantriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietquantriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietquantriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
