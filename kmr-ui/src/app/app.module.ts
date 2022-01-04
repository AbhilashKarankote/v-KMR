import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { CaptureComponent } from './capture/capture.component';
import { SearchComponent } from './search/search.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddKnowledgeComponent } from './add-knowledge/add-knowledge.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { AgGridModule } from 'ag-grid-angular';
import { ActionCellRenderer } from './add-knowledge/action-cell-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaptureComponent,
    SearchComponent,
    FileUploadComponent,
    AddKnowledgeComponent,
    ListProjectsComponent,
    ActionCellRenderer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDocViewerModule,
    PdfViewerModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ActionCellRenderer]
})
export class AppModule { }
