import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, switchMap, withLatestFrom } from 'rxjs';
import { SubjectsService } from './subjects.service';
import {
  newSubject,
  subjectsCallSucess,
  newSubjectSucess,
  callSubjects,
  updateSubject,
  updateSubjectSucess,
  deleteSubject,
  deleteSubjectSucess,
} from './subjects.action';
import { selectorSubjects } from './subjects.selector';

@Injectable()
export class SubjectsEffects {
  constructor(
    private actions$: Actions,
    private subjectService: SubjectsService,
    private store: Store
  ) {}

  loadAllSubjects = createEffect(() =>
    this.actions$.pipe(
      ofType(callSubjects),
      withLatestFrom(this.store.pipe(select(selectorSubjects))),
      switchMap(([, subjectsFromStore]) => {
        if (subjectsFromStore.length > 0) {
          return EMPTY;
        }

        return this.subjectService
          .get()
          .pipe(map((data) => subjectsCallSucess({ allSubjects: data })));
      })
    )
  );

  saveNewSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newSubject),
      switchMap((action) => {
        return this.subjectService.create(action.payload).pipe(
          map((data) => {
            return newSubjectSucess({ response: data });
          })
        );
      })
    )
  );

  updateSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSubject),
      switchMap((action) => {
        return this.subjectService.upload(action.updateSubject).pipe(
          map((data) => {
            return updateSubjectSucess({ response: data });
          })
        );
      })
    )
  );

  deleteSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSubject),
      switchMap((action) => {
        return this.subjectService.delete(action.id).pipe(
          map((data) => {
            return deleteSubjectSucess({ id: action.id });
          })
        );
      })
    )
  );
}
