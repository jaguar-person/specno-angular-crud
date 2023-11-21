import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Student } from './students/student';
import { Subject } from './subjects/subject';
import { studentReducer } from './students/students.reducer';
import { subjectReducer } from './subjects/subjects.reducer';

export interface AppState {
  students: Student[];
  subjects: Subject[];
}

export const reducers: ActionReducerMap<AppState> = {
  students: studentReducer,
  subjects: subjectReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
