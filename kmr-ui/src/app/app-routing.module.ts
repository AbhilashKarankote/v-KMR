import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CaptureComponent } from "./capture/capture.component"
import { SearchComponent } from "./search/search.component"
import { AddKnowledgeComponent } from "./add-knowledge/add-knowledge.component"


const routes: Routes = [
  {path: "addProject",component: CaptureComponent},
  {path: "search",component: SearchComponent},
  {path: "addKnowledge",component: AddKnowledgeComponent},
  {path: "",redirectTo: "addProject",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
