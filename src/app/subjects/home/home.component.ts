import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  callSubjects,
  deleteSubject,
} from '../../reducers/subjects/subjects.action';
import { selectorSubjects } from '../../reducers/subjects/subjects.selector';
declare var bootstrap: any;

@Component({
  selector: 'subjects-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class SubjectsComponent implements OnInit {
  constructor(private store: Store) {}

  subjects$ = this.store.pipe(select(selectorSubjects));

  deleteModal: any;
  idTodelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new bootstrap.Modal(
      document.getElementById('deleteModel')
    );
    this.store.dispatch(callSubjects());
  }

  confirmDelete() {
    this.store.dispatch(deleteSubject({ id: this.idTodelete }));

    this.deleteModal.hide();
  }

  openDeleteModel(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
}
