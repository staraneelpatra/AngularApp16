import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agent2Component } from './agent2.component';

describe('Agent2Component', () => {
  let component: Agent2Component;
  let fixture: ComponentFixture<Agent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Agent2Component]
    });
    fixture = TestBed.createComponent(Agent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
