import { Project } from './../Model/project-model';
import { CaptureService } from './../capture/capture.service';
import { AddKnowledgeService } from './add-knowledge.service';
import { Component, OnInit } from "@angular/core";
import { AgRendererComponent } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from "ag-grid-community";

@Component({
    selector: 'action-cell-renderer',
    template: `
    <span style="margin-right: 10px;">
       <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">
       <mat-icon (click)= "onEditClick()"  aria-hidden="false" >edit</mat-icon>
        </button>
    </span>
    <span>
       <button mat-mini-fab color="warn" aria-label="Example icon button with a menu icon">
       <mat-icon (click)= "onDeleteClick(this.params.data)"  aria-hidden="false" >delete</mat-icon>
       </button>
    </span>
       `

  })
  export class ActionCellRenderer implements AgRendererComponent  {
    params : any
    project:Project
    problemIndex : number

    constructor(private knowledgeService:AddKnowledgeService,
      private captureService:CaptureService) {

    }

    agInit(params)  {
      this.params = params
    }

    refresh(params: ICellRendererParams): boolean {
        //throw new Error("Method not implemented.");
        return true;
    }

    onEditClick(){
        console.log('edit clicked')
    }

    onDeleteClick(data){
        console.log(data)
        console.log(this.params.context.componentParent.id)

        for(let i=0;i<this.params.context.componentParent.rowData.length;i++) {
          this.params.context.componentParent.rowData[i].problem == this.params.data.problem
            this.problemIndex = i;
            console.log(this.problemIndex)

        }

        console.log(this.problemIndex)
        this.knowledgeService.deleteProblem(this.params.context.componentParent.id,this.problemIndex).subscribe(
          response => {
            console.log("deleted");
            this.captureService.getProjectById(this.params.context.componentParent.id).subscribe(proj => {
              this.project = proj
               //proj.problemSolution.forEach( ps => { this.rowData.push({"problem":ps.problem}) })
               this.params.context.componentParent.rowData =  proj.problemSolution.map(ps => {
                 return {"problem":ps.problem}
                 });
              console.log(proj);
              console.log(this.params.context.componentParent.rowData);
            })
          }
        )

    }



    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
        //throw new Error("Method not implemented.");
    }


  }
