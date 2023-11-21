import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Student } from './student';

export const selectorStudents = createFeatureSelector<Student[]>('students');

export const selectorStudentById = (studentId: number) => {
  return createSelector(selectorStudents, (students: Student[]) => {
    var studentById = students.filter((_) => _.id == studentId);
    if (studentById.length === 0) {
      return null;
    }

    return studentById[0];
  });
};
