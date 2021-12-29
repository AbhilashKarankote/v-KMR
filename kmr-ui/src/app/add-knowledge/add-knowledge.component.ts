import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CaptureService } from '../capture/capture.service';
import { Project } from '../Model/project-model';
import { AddKnowledgeService } from './add-knowledge.service';

@Component({
  selector: 'app-add-knowledge',
  templateUrl: './add-knowledge.component.html',
  styleUrls: ['./add-knowledge.component.css']
})
export class AddKnowledgeComponent implements OnInit {

  knowledgeForm:FormGroup
  project:Project
   upload$:any
    formData:FormData

  constructor(private fb:FormBuilder,
     private http:HttpClient,
     private captureService:CaptureService,
     private knowledgeService:AddKnowledgeService
     ) { }

  ngOnInit(): void {
    this.knowledgeForm = this.fb.group({
      "projectCode":["",Validators.required],
      "problem":["",Validators.required],
      "solution":["",Validators.required],
      "file":["",Validators.required]
    })
  }

  fileName = '';
  uploadProgress:number;
  uploadSub: Subscription;

  onChange(){
    //this.project.technologies.concat(", ")
    let projectCode=this.knowledgeForm.get("projectCode").value
    console.log(projectCode)
    this.captureService.getProject(projectCode).subscribe(proj =>{
      console.log(proj)
    this.project=proj
    })
  }

  onFileSelected(event) {
    const file:File = event.target.files[0];
    console.log("here");
    console.log(event)
  
    if (file) {
        this.fileName = file.name;
        console.log(this.fileName)
        this.formData = new FormData();
        this.formData.append("file", file);
        //this.formData.append("problem", this.knowledgeForm.get("problem").value);
        //this.formData.append("solution", this.knowledgeForm.get("solution").value);

       
    }
}

cancelUpload() {
this.uploadSub.unsubscribe();
this.reset();
}

reset() {
this.uploadProgress = null;
this.uploadSub = null;
}

onSubmit(){
  console.log(this.knowledgeForm.value)
  this.upload$ = this.knowledgeService.addKnowledge( this.knowledgeForm.get("projectCode").value,this.formData,this.knowledgeForm.value)
  .pipe(
      finalize(() => this.reset())
  );

  this.uploadSub = this.upload$.subscribe(event => {
    if (event.type == HttpEventType.UploadProgress) {
      this.uploadProgress = Math.round(100 * (event.loaded / event.total));
    }
  })
}

}
