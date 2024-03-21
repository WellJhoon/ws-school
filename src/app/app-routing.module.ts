import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./features/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
