import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudoGameNameComponent } from './ludo-game-name.component';

describe('LudoGameNameComponent', () => {
  let component: LudoGameNameComponent;
  let fixture: ComponentFixture<LudoGameNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LudoGameNameComponent]
    });
    fixture = TestBed.createComponent(LudoGameNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
