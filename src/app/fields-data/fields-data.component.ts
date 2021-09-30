import { Component, OnInit } from '@angular/core';
import { FieldsServiceService } from '../fields-service.service';
import { Fields } from '../fields';

@Component({
  selector: 'app-fields-data',
  templateUrl: './fields-data.component.html',
  styleUrls: ['./fields-data.component.css']
})
export class FieldsDataComponent implements OnInit {

  myFields: Fields[] = [];


  constructor(public field_service: FieldsServiceService) { }

  getFields(searchTerm:any){
    this.field_service.getFields(searchTerm).subscribe((data) => {
      this.myFields=[];
      this.myFields.push(data);
      console.log(this.myFields)
    })
  }

  ngOnInit(){
    this.getFields("")
  }

}
