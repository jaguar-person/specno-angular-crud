import { createAction, props } from '@ngrx/store';
import { Student } from './student';

export const callStudents = createAction('[Students] Collection of Students');

export const studentsCallSucess = createAction(
  '[Students] Collection of Students Sucess',
  props<{ allStudents: Student[] }>()
);

export const studentsCallFail = createAction(
  '[Students] Collection of Students Fail',
  props<{ allStudents: Student[] }>()
);

export const newStudent = createAction(
  '[Student] Create New Student',
  props<{ payload: Student }>()
);

export const newStudentSucess = createAction(
  '[Student] Create New Student Sucess',
  props<{ response: Student }>()
);

export const newStudentFail = createAction(
  '[Student] Create New student Fail',
  props<{ response: Student }>()
);

export const updateStudent = createAction(
  '[Student] Update Student',
  props<{ updateStudent: Student }>()
);

export const updateStudentSucess = createAction(
  '[Student] Update Student Sucess',
  props<{ response: Student }>()
);

export const updateStudentFail = createAction(
  '[Student] Update Student Sucess',
  props<{ response: Student }>()
);

export const deleteStudent = createAction(
  '[Student] Delete student',
  props<{ id: number }>()
);

export const deleteStudentSucess = createAction(
  '[Student] Delete student Sucess',
  props<{ id: number }>()
);

export const deleteStudentFail = createAction(
  '[Student] Delete student Fail',
  props<{ id: number }>()
);
