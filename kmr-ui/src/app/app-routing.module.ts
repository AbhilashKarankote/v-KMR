import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CaptureComponent } from "./capture/capture.component"
import { SearchComponent } from "./search/search.component"
import { AddKnowledgeComponent } from "./add-knowledge/add-knowledge.component"
import { ListProjectsComponent } from './list-projects/list-projects.component';


const routes: Routes = [
  //{path: "addProject",component: CaptureComponent},
  {path: "list-projects",component: ListProjectsComponent},
  {path: "search",component: SearchComponent},
  {path: "addKnowledge/:id",component: AddKnowledgeComponent},
  {path: "addKnowledge",component: AddKnowledgeComponent},
  {path: "",redirectTo: "search",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
