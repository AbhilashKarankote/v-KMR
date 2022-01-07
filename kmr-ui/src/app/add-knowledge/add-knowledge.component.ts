import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CaptureService } from '../capture/capture.service';
import { Project } from '../Model/project-model';
import { AddKnowledgeService } from './add-knowledge.service';
import { ColDef } from 'ag-grid-community';
import { ActionCellRenderer } from './action-cell-renderer.component';

@Component({
  selector: 'app-add-knowledge',
  templateUrl: './add-knowledge.component.html',
  styleUrls: ['./add-knowledge.component.css']
})
export class AddKnowledgeComponent implements OnInit {

  frameworkComponents;
  knowledgeForm:FormGroup
  project:Project
  upload$:any
  formData:FormData
  id:string
  rowData;
  columnDefs: ColDef[] = [
    { field: 'problem', headerName: "Existing Solutions",width:700 , sortable: true, filter: true },
    { field: 'action',headerName: "Action",width:200, cellRenderer: "actionCellRenderer" }
];
gridOptions = {
  context : {
    componentParent: this,
  }
}

  constructor(private fb:FormBuilder,
     private http:HttpClient,
     private captureService:CaptureService,
     private knowledgeService:AddKnowledgeService,
     private route:ActivatedRoute
     ) { }

  ngOnInit(): void {
    this.frameworkComponents = {
      actionCellRenderer:ActionCellRenderer
    }
    this.route.params.subscribe(res => {
      this.id = res["id"];
    })
    this.captureService.getProjectById(this.id).subscribe(proj => {
      this.project = proj
       //proj.problemSolution.forEach( ps => { this.rowData.push({"problem":ps.problem}) })
      this.rowData =  proj.problemSolution.map(ps => {
         return {"problem":ps.problem}
         });
      console.log(proj);
      console.log(this.rowData);
    })
    this.knowledgeForm = this.fb.group({
      "projectCode":[""],
      "problem":[""],
      "solution":[""],
      "file":[""]
    })
  }

  fileName = '';
  uploadProgress:number;
  uploadSub: Subscription;

  // onChange(){
  //   //this.project.technologies.concat(", ")
  //   let projectCode=this.knowledgeForm.get("projectCode").value
  //   console.log(projectCode)
  //   this.captureService.getProject(projectCode).subscribe(proj =>{
  //     console.log(proj)
  //   this.project=proj
  //   })
  // }

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
  this.knowledgeForm.patchValue({
    "projectCode": this.project.projectCode
  })
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

  this.ngOnInit();
  this.fileName=null
}

isValid():boolean{
  return this.knowledgeForm.get("problem").value !== ""
   && this.knowledgeForm.get("solution").value !== ""
   && this.knowledgeForm.get("file").value !== ""
}

}
