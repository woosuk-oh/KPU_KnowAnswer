import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game4Component } from './game4.component';

describe('Game4Component', () => {
  let component: Game4Component;
  let fixture: ComponentFixture<Game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
