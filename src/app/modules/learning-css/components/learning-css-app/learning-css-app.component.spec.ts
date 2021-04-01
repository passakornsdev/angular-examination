import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCssAppComponent } from './learning-css-app.component';

describe('LearningCssAppComponent', () => {
  let component: LearningCssAppComponent;
  let fixture: ComponentFixture<LearningCssAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCssAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCssAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
