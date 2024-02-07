import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesScreenComponent } from './packages-screen.component';

describe('PackagesScreenComponent', () => {
  let component: PackagesScreenComponent;
  let fixture: ComponentFixture<PackagesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackagesScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
