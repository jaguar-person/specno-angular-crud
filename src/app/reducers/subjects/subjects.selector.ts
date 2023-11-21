import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Subject, SubjectState } from './subject';
import { AppState } from '..';

export const selectorSubjects = createFeatureSelector<Subject[]>('subjects');

export const selectorSubjectById = (subjectId: number) => {
  return createSelector(selectorSubjects, (subjects: Subject[]) => {
    var subjectById = subjects.filter((_) => _.id == subjectId);
    if (subjectById.length === 0) {
      return null;
    }

    return subjectById[0];
  });
};
