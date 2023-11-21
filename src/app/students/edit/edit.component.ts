import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { Student } from '../../reducers/students/student';
import { updateStudent } from '../../reducers/students/students.action';
import { selectorStudentById } from '../../reducers/students/students.selector';
import { selectorSubjects } from 'src/app/reducers/subjects/subjects.selector';
import { callSubjects } from 'src/app/reducers/subjects/subjects.action';

@Component({
  selector: 'student-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  subjects$ = this.store.pipe(select(selectorSubjects));

  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    subjects: [],
  };

  ngOnInit(): void {
    let fetchFromData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = Number(params.get('id'));
        return this.store.pipe(select(selectorStudentById(id)));
      })
    );
    this.store.dispatch(callSubjects());

    fetchFromData$.subscribe((data) => {
      if (data) {
        this.studentForm = {
          ...data,
        };
      } else {
        this.router.navigate(['/students']);
      }
    });
  }

  update() {
    if (
      this.studentForm.firstName.length &&
      this.studentForm.lastName.length &&
      this.studentForm.subjects.length
    ) {
      this.store.dispatch(
        updateStudent({ updateStudent: { ...this.studentForm } })
      );
      this.router.navigate(['/students']);
    }
  }
  handleCheckbox(name: string): void {
    console.log(name, this.studentForm.subjects);
    if (this.studentForm.subjects.includes(name)) {
      this.studentForm.subjects = this.studentForm.subjects.filter(
        (subject) => subject !== name
      );
    } else {
      this.studentForm.subjects = this.studentForm.subjects.concat(name);
    }
  }
}
