import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Legacy2Component } from './legacy2.component';

describe('Legacy2Component', () => {
  let component: Legacy2Component;
  let fixture: ComponentFixture<Legacy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Legacy2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Legacy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
