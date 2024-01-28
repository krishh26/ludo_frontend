import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWithdrawComponent } from './add-withdraw.component';

describe('AddWithdrawComponent', () => {
  let component: AddWithdrawComponent;
  let fixture: ComponentFixture<AddWithdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWithdrawComponent]
    });
    fixture = TestBed.createComponent(AddWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
