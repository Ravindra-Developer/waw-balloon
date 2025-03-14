import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayDecorationsComponent } from './birthday-decorations.component';

describe('BirthdayDecorationsComponent', () => {
  let component: BirthdayDecorationsComponent;
  let fixture: ComponentFixture<BirthdayDecorationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdayDecorationsComponent]
    });
    fixture = TestBed.createComponent(BirthdayDecorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
