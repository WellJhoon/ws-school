import { Component } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class ListUsersComponent {
  users = [
    {
      id: 1,
      fullName: 'Admin',
      username: 'admin',
      password: 'admin',
      roleId: 1,
    },
    {
      id: 2,
      fullName: 'Juan Pila',
      username: 'teacher',
      password: 'teacher',
      roleId: 2,
    },
    {
      id: 3,
      fullName: 'Manuel Perez',
      username: 'student',
      password: 'student',
      roleId: 3,
    },
  ];
}
