import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, switchMap, withLatestFrom } from 'rxjs';
import {
  newStudent,
  studentsCallSucess,
  newStudentSucess,
  callStudents,
  updateStudent,
  updateStudentSucess,
  deleteStudent,
  deleteStudentSucess,
} from './students.action';
import { selectorStudents } from './students.selector';
import { StudentsService } from './students.service';

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private studentService: StudentsService,
    private store: Store
  ) {}

  loadAllStudents = createEffect(() =>
    this.actions$.pipe(
      ofType(callStudents),
      withLatestFrom(this.store.pipe(select(selectorStudents))),
      switchMap(([, studentsFromStore]) => {
        if (studentsFromStore.length > 0) {
          return EMPTY;
        }
        return this.studentService
          .get()
          .pipe(map((data) => studentsCallSucess({ allStudents: data })));
      })
    )
  );

  saveNewStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newStudent),
      switchMap((action) => {
        return this.studentService.create(action.payload).pipe(
          map((data) => {
            return newStudentSucess({ response: data });
          })
        );
      })
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      switchMap((action) => {
        return this.studentService.upload(action.updateStudent).pipe(
          map((data) => {
            return updateStudentSucess({ response: data });
          })
        );
      })
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      switchMap((action) => {
        return this.studentService.delete(action.id).pipe(
          map((data) => {
            return deleteStudentSucess({ id: action.id });
          })
        );
      })
    )
  );
}
