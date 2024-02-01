import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGameCodeComponent } from './show-game-code.component';

describe('ShowGameCodeComponent', () => {
  let component: ShowGameCodeComponent;
  let fixture: ComponentFixture<ShowGameCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowGameCodeComponent]
    });
    fixture = TestBed.createComponent(ShowGameCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
