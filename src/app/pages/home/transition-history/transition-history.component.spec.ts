import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionHistoryComponent } from './transition-history.component';

describe('TransitionHistoryComponent', () => {
  let component: TransitionHistoryComponent;
  let fixture: ComponentFixture<TransitionHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransitionHistoryComponent]
    });
    fixture = TestBed.createComponent(TransitionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
