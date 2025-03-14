import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversaryCelebrationsComponent } from './anniversary-celebrations.component';

describe('AnniversaryCelebrationsComponent', () => {
  let component: AnniversaryCelebrationsComponent;
  let fixture: ComponentFixture<AnniversaryCelebrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnniversaryCelebrationsComponent]
    });
    fixture = TestBed.createComponent(AnniversaryCelebrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
