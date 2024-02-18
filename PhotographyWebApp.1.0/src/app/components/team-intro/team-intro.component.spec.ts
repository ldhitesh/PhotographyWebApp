import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIntroComponent } from './team-intro.component';

describe('TeamIntroComponent', () => {
  let component: TeamIntroComponent;
  let fixture: ComponentFixture<TeamIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamIntroComponent]
    });
    fixture = TestBed.createComponent(TeamIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
