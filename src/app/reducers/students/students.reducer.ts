import { createReducer, on } from '@ngrx/store';
import { Student } from './student';
import {
  studentsCallSucess,
  deleteStudentSucess,
  newStudentSucess,
  updateStudentSucess,
} from './students.action';

export const initialState: Array<Student> = [];

export const studentReducer = createReducer(
  initialState,
  on(studentsCallSucess, (state, { allStudents }) => {
    return allStudents;
  }),
  on(newStudentSucess, (state, { response }) => {
    let newState = [...state];

    newState.unshift(response);

    return newState;
  }),
  on(updateStudentSucess, (state, { response }) => {
    let newState = state.filter((_) => _.id != response.id);

    newState.unshift(response);
    return newState;
  }),
  on(deleteStudentSucess, (state, { id }) => {
    let newState = state.filter((_) => _.id != id);

    return newState;
  })
);
