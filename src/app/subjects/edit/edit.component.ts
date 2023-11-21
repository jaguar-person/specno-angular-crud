import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { Subject } from '../../reducers/subjects/subject';
import { updateSubject } from '../../reducers/subjects/subjects.action';
import { selectorSubjectById } from '../../reducers/subjects/subjects.selector';

@Component({
  selector: 'subject-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class SubjectEditComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  subjectForm: Subject = {
    id: 0,
    name: '',
    teacher: '',
  };

  ngOnInit(): void {
    let fetchFromData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = Number(params.get('id'));
        return this.store.pipe(select(selectorSubjectById(id)));
      })
    );

    fetchFromData$.subscribe((data) => {
      if (data) {
        this.subjectForm = {
          ...data,
        };
      } else {
        this.router.navigate(['/subjects']);
      }
    });
  }

  update() {
    if (this.subjectForm.name.length && this.subjectForm.teacher.length) {
      this.store.dispatch(
        updateSubject({ updateSubject: { ...this.subjectForm } })
      );
      this.router.navigate(['/subjects']);
    }
  }
}
