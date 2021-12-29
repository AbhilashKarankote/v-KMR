import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../Model/project-model';
import * as constants from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CaptureService {

  search(search: string) {
    return this.http.get(constants.baseUrl+constants.getKnowledge+search);
  }

  getProject(projectCode: string) : Observable<Project> {
   return this.http.get<Project>(constants.baseUrl+constants.getProject+projectCode);
  }

  constructor(private http:HttpClient) { }

  addProject(project:Project) : Observable<Project>{
   return this.http.post<Project>(constants.baseUrl+constants.addProject,project)
  }
}
