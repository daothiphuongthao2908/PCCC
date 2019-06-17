import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaquantriComponent } from './suaquantri.component';

describe('SuaquantriComponent', () => {
  let component: SuaquantriComponent;
  let fixture: ComponentFixture<SuaquantriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaquantriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaquantriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
