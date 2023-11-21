export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  subjects: string[];
}

export interface StudentState {
  students: Student[];
}
