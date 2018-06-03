import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesHeaderComponent } from './components/notes-header/notes-header.component';
import { NotesEditorComponent } from './components/notes-editor/notes-editor.component';
import { NotesContentComponent } from './components/notes-content/notes-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesListComponent,
    NotesHeaderComponent,
    NotesEditorComponent,
    NotesContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
