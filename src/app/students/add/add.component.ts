import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Student } from '../../reducers/students/student';
import { newStudent } from '../../reducers/students/students.action';
import { AppState } from 'src/app/reducers';
import { selectorSubjects } from 'src/app/reducers/subjects/subjects.selector';
import { callSubjects } from 'src/app/reducers/subjects/subjects.action';
@Component({
  selector: 'student-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class StudentAddComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  subjects$ = this.store.pipe(select(selectorSubjects));
  checkboxes: boolean[] = [false];
  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    subjects: [],
  };

  ngOnInit() {
    this.store.dispatch(callSubjects());
  }

  save() {
    if (
      this.studentForm.firstName.length &&
      this.studentForm.lastName.length &&
      this.studentForm.subjects.length
    ) {
      this.store.dispatch(newStudent({ payload: { ...this.studentForm } }));
      this.router.navigate(['/students']);
    }
  }
  handleCheckbox(index: number, name: string): void {
    if (!this.checkboxes[index]) {
      console.log(`Checkbox ${name} is checked.`);
      this.studentForm.subjects.unshift(name);
    } else {
      console.log(`Checkbox ${name} is not checked.`);
      this.studentForm.subjects = this.studentForm.subjects.filter(
        (subject) => subject !== name
      );
    }
  }
}
