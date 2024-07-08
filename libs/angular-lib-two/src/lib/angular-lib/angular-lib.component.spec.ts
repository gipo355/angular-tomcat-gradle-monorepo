import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { AngularLibComponent } from './angular-lib-two.component';

describe('AngularLibComponent', () => {
  let component: AngularLibComponent;
  let fixture: ComponentFixture<AngularLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
