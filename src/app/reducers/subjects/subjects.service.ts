import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Subject[]>('http://localhost:3000/subjects');
  }

  create(payload: Subject) {
    return this.http.post<Subject>('http://localhost:3000/subjects', payload);
  }

  upload(payload: Subject) {
    return this.http.put<Subject>(
      `http://localhost:3000/subjects/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/subjects/${id}`);
  }
}
