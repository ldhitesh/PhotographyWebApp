import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayareaComponent } from './displayarea.component';

describe('DisplayareaComponent', () => {
  let component: DisplayareaComponent;
  let fixture: ComponentFixture<DisplayareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayareaComponent]
    });
    fixture = TestBed.createComponent(DisplayareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
