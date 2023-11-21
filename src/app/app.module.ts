import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { SubjectsComponent } from './subjects/home/home.component';
import { SubjectAddComponent } from './subjects/add/add.component';
import { SubjectEditComponent } from './subjects/edit/edit.component';
import { StudentsComponent } from './students/home/home.component';
import { StudentAddComponent } from './students/add/add.component';
import { StudentEditComponent } from './students/edit/edit.component';
import { EffectsModule } from '@ngrx/effects';
import { SubjectsEffects } from './reducers/subjects/subjects.effects';
import { StudentsEffects } from './reducers/students/students.effects';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SubjectAddComponent,
    SubjectEditComponent,
    StudentsComponent,
    StudentAddComponent,
    StudentEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([SubjectsEffects, StudentsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
