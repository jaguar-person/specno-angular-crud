import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from '../../reducers/subjects/subject';
import { newSubject } from '../../reducers/subjects/subjects.action';

@Component({
  selector: 'subject-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class SubjectAddComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  subjectForm: Subject = {
    id: 0,
    name: '',
    teacher: '',
  };

  ngOnInit(): void {}

  save() {
    if (this.subjectForm.name.length && this.subjectForm.teacher.length) {
      this.store.dispatch(newSubject({ payload: { ...this.subjectForm } }));
      this.router.navigate(['/subjects']);
    }
  }
}
