import { Component } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent {
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
