import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as constants from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AddKnowledgeService {

  constructor(private http:HttpClient) { }

  addKnowledge(projectCode:string,formData:FormData,form:any){
    console.log(formData)
    return this.http.post(constants.baseUrl+constants.addKnowledge+projectCode,formData, {
      params: { "problem": form.problem,
    "solution":form.solution },
      reportProgress: true,
      observe: 'events'
  })
  }
}
