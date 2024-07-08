import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { AngularLibThreeComponent } from './angular-lib-three.component';

describe('AngularLibThreeComponent', () => {
  let component: AngularLibThreeComponent;
  let fixture: ComponentFixture<AngularLibThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibThreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularLibThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
