import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './users.component';

describe('ListStudentsComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
    });
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
