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
       <mat-icon (click)= "onDeleteClick()"  aria-hidden="false" >delete</mat-icon>
       </button>
    </span>
       `

  })
  export class ActionCellRenderer implements AgRendererComponent  {
    params : ICellRendererParams
    project:Project
    problemIndex : number

    constructor(private knowledgeService:AddKnowledgeService,
      private captureService:CaptureService) {

    }

    agInit(params:ICellRendererParams)  {
      this.params = params

    }

    refresh(params: ICellRendererParams): boolean {
        //throw new Error("Method not implemented.");
        return true;
    }

    onEditClick(){
        console.log('edit clicked')
        this.params.context.componentParent.onEdit(this.params.rowIndex.valueOf());
    }

    onDeleteClick(){
        this.knowledgeService.deleteProblem(this.params.context.componentParent.id,this.params.rowIndex.valueOf()).subscribe(
          response => {
            this.params.context.componentParent.getProject();
          }
        )
    }

    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
        //throw new Error("Method not implemented.");
    }


  }
