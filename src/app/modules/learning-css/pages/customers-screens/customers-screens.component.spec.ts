import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersScreensComponent } from './customers-screens.component';

describe('CustomersScreensComponent', () => {
  let component: CustomersScreensComponent;
  let fixture: ComponentFixture<CustomersScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
