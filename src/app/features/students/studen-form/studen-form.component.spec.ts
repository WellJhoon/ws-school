import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenFormComponent } from './studen-form.component';

describe('StudenFormComponent', () => {
  let component: StudenFormComponent;
  let fixture: ComponentFixture<StudenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenFormComponent]
    });
    fixture = TestBed.createComponent(StudenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
