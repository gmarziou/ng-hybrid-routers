import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Legacy1Component } from './legacy1.component';

describe('Legacy1Component', () => {
  let component: Legacy1Component;
  let fixture: ComponentFixture<Legacy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Legacy1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Legacy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
