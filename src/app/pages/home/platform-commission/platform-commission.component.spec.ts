import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCommissionComponent } from './platform-commission.component';

describe('PlatformCommissionComponent', () => {
  let component: PlatformCommissionComponent;
  let fixture: ComponentFixture<PlatformCommissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformCommissionComponent]
    });
    fixture = TestBed.createComponent(PlatformCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
