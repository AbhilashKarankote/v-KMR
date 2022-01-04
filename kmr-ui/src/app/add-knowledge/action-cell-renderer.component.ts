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
    refresh(params: ICellRendererParams): boolean {
        //throw new Error("Method not implemented.");
        return true;
    }

    onEditClick(){
        console.log('edit clicked')
    }

    onDeleteClick(){
        console.log('delete clicked')
    }
    

    agInit(params: ICellRendererParams): void {
        //throw new Error("Method not implemented.");
    }
    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
        //throw new Error("Method not implemented.");
    }
    
      
  }