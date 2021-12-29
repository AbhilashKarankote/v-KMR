import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CaptureService } from '../capture/capture.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search="";
  data=[];
  doc;//="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"

  constructor(private capService:CaptureService,
    private http:HttpClient ) { }

  ngOnInit(): void {
  }

  async moreDetails(i){
  console.log(this.data[i].file.data);
  const base64Response = await fetch(`data:application/pdf;base64,${this.data[i].file.data}`);
  const blob3 =  base64Response.blob().then(res => {
    const url = window.URL.createObjectURL(res)
    window.open(url);
  });
    
  }

  onSubmit(){

    this.capService.search(this.search).subscribe((res:[any]) =>{
      this.data = res
    })


    // this.http.get("http://localhost:4200/api/hello",{
    //   responseType: "blob" as "json"
    // }).subscribe((response:any) => {
    //   console.log(response)
    //   let blob:Blob = new Blob([response], { type: 'application/pdf; charset=utf-8' });
    //   console.log(blob.arrayBuffer().toString())
		// 	const url = window.URL.createObjectURL(blob);
		// 	window.open(url);
    // })
    
  
  }

  
}
