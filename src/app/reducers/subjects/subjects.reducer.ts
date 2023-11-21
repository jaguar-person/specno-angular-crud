import { createReducer, on } from '@ngrx/store';
import { Subject } from './subject';
import {
  subjectsCallSucess,
  deleteSubjectSucess,
  newSubjectSucess,
  updateSubjectSucess,
} from './subjects.action';

export const initialState: Array<Subject> = [];

export const subjectReducer = createReducer(
  initialState,
  on(subjectsCallSucess, (state, { allSubjects }) => {
    return allSubjects;
  }),
  on(newSubjectSucess, (state, { response }) => {
    let newState = [...state];

    newState.unshift(response);

    return newState;
  }),
  on(updateSubjectSucess, (state, { response }) => {
    let newState = state.filter((_) => _.id != response.id);

    newState.unshift(response);
    return newState;
  }),
  on(deleteSubjectSucess, (state, { id }) => {
    let newState = state.filter((_) => _.id != id);

    return newState;
  })
);
