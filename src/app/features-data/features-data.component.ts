import { Component, OnInit } from '@angular/core';
import { Features } from '../features';
import { FeaturesServiceService } from '../features-service.service';

@Component({
  selector: 'app-features-data',
  templateUrl: './features-data.component.html',
  styleUrls: ['./features-data.component.css']
})
export class FeaturesDataComponent implements OnInit {

  myFeatures:any

  constructor(public feature_service: FeaturesServiceService) { }

  getFeatures(searchTerm:any){
    this.feature_service.getFeatures(searchTerm).subscribe((data) =>{
      this.myFeatures=data['features'];
      console.log(this.myFeatures)
      console.log(typeof(this.myFeatures))
    
    });
  }

  ngOnInit(): void {
    this.getFeatures("")
  }

}
