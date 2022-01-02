import { Component, OnInit } from '@angular/core';
import { CaptureService } from '../capture/capture.service';
import { Project } from '../Model/project-model';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  projectList:[Project];

  constructor(private capService:CaptureService) { }

  ngOnInit(): void {
    let res = this.capService.getProjects().subscribe( res => {
      this.projectList=res
      console.log(res)
    })
  }

}
