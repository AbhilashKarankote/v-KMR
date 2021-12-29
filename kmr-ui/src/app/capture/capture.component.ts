import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CaptureService } from './capture.service'

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {
  
  captureForm:FormGroup;
  
  constructor(private http: HttpClient,
    private fb:FormBuilder,
    private captureService:CaptureService
    ) {}

  ngOnInit(): void {
    this.captureForm = this.fb.group({
      "projectName":["",[Validators.required]],
      "projectCode":["",[Validators.required]],
      "technologies":this.fb.array([this.fb.control(null,Validators.required)]),
      "projectSbu":["",[Validators.required]],
      "projectManager":["",[Validators.required]],
      "technicalLead":["",[Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.captureForm.value)
    this.captureService.addProject(this.captureForm.value).subscribe()
    
  }

  getTechControls() {
    return (this.captureForm.get('technologies') as FormArray).controls;
  }

  addTech(){
    //const control = new FormControl([null,Validators.required]);
    (<FormArray>this.captureForm.get("technologies")).push(this.fb.control(null,Validators.required));
  }

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription;


    onFileSelected(event) {
        const file:File = event.target.files[0];
      
        if (file) {
            this.fileName = file.name;
            console.log(this.fileName)
            const formData = new FormData();
            formData.append("thumbnail", file);

            const upload$ = this.http.post("/api/thumbnail-upload", formData, {
                reportProgress: true,
                observe: 'events'
            })
            .pipe(
                finalize(() => this.reset())
            );
          
            this.uploadSub = upload$.subscribe(event => {
              if (event.type == HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
            })
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

}
