import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShowerThemesComponent } from './baby-shower-themes.component';

describe('BabyShowerThemesComponent', () => {
  let component: BabyShowerThemesComponent;
  let fixture: ComponentFixture<BabyShowerThemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabyShowerThemesComponent]
    });
    fixture = TestBed.createComponent(BabyShowerThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
