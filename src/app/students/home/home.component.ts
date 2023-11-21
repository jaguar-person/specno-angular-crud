import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  callStudents,
  deleteStudent,
} from '../../reducers/students/students.action';
import { selectorStudents } from '../../reducers/students/students.selector';

declare var bootstrap: any;

@Component({
  selector: 'students-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private store: Store) {}

  students$ = this.store.pipe(select(selectorStudents));

  deleteModal: any;
  idTodelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new bootstrap.Modal(
      document.getElementById('deleteModel')
    );
    this.store.dispatch(callStudents());
  }

  confirmDelete() {
    this.store.dispatch(deleteStudent({ id: this.idTodelete }));

    this.deleteModal.hide();
  }

  openDeleteModel(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
}
