import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agent1Component } from './agent1.component';

describe('Agent1Component', () => {
  let component: Agent1Component;
  let fixture: ComponentFixture<Agent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Agent1Component]
    });
    fixture = TestBed.createComponent(Agent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
