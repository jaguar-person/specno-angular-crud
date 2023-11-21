import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/home/home.component';
import { SubjectAddComponent } from './subjects/add/add.component';
import { SubjectEditComponent } from './subjects/edit/edit.component';
import { StudentsComponent } from './students/home/home.component';
import { StudentAddComponent } from './students/add/add.component';
import { StudentEditComponent } from './students/edit/edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/add', component: SubjectAddComponent },
  { path: 'subjects/edit/:id', component: SubjectEditComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'students/edit/:id', component: StudentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
