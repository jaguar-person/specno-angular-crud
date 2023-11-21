import { createAction, props } from '@ngrx/store';
import { Subject } from './subject';

export const callSubjects = createAction('[Subjects] Collection of Subjects');

export const subjectsCallSucess = createAction(
  '[Subjects] Collection of Subjects Sucess',
  props<{ allSubjects: Subject[] }>()
);

export const subjectsCallFail = createAction(
  '[Subjects] Collection of Subjects Fail',
  props<{ allSubjects: Subject[] }>()
);

export const newSubject = createAction(
  '[Subject] Create New Subject',
  props<{ payload: Subject }>()
);

export const newSubjectSucess = createAction(
  '[Subject] Create New Subject Sucess',
  props<{ response: Subject }>()
);

export const newSubjectFail = createAction(
  '[Subject] Create New subject Fail',
  props<{ response: Subject }>()
);

export const updateSubject = createAction(
  '[Subject] Update Subject',
  props<{ updateSubject: Subject }>()
);

export const updateSubjectSucess = createAction(
  '[Subject] Update Subject Sucess',
  props<{ response: Subject }>()
);

export const updateSubjectFail = createAction(
  '[Subject] Update Subject Sucess',
  props<{ response: Subject }>()
);

export const deleteSubject = createAction(
  '[Subject] Delete subject',
  props<{ id: number }>()
);

export const deleteSubjectSucess = createAction(
  '[Subject] Delete subject Sucess',
  props<{ id: number }>()
);

export const deleteSubjectFail = createAction(
  '[Subject] Delete subject Fail',
  props<{ id: number }>()
);
