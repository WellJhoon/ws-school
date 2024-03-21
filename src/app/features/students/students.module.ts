import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudenFormComponent } from './studen-form/studen-form.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [ListStudentsComponent, StudenFormComponent],
  imports: [CommonModule, StudentsRoutingModule],
})
export class StudentsModule {}
