import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferEarnComponent } from './refer-earn.component';

describe('ReferEarnComponent', () => {
  let component: ReferEarnComponent;
  let fixture: ComponentFixture<ReferEarnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferEarnComponent]
    });
    fixture = TestBed.createComponent(ReferEarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
