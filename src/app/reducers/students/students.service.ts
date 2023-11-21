import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Student[]>('http://localhost:3000/students');
  }

  create(payload: Student) {
    return this.http.post<Student>('http://localhost:3000/students', payload);
  }

  upload(payload: Student) {
    return this.http.put<Student>(
      `http://localhost:3000/students/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/students/${id}`);
  }
}
