export interface Subject {
  id: number;
  name: string;
  teacher: string;
}

export interface SubjectState {
  subjects: Subject[];
}
