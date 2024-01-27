import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundCancelattionPolicyComponent } from './refund-cancelattion-policy.component';

describe('RefundCancelattionPolicyComponent', () => {
  let component: RefundCancelattionPolicyComponent;
  let fixture: ComponentFixture<RefundCancelattionPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundCancelattionPolicyComponent]
    });
    fixture = TestBed.createComponent(RefundCancelattionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
