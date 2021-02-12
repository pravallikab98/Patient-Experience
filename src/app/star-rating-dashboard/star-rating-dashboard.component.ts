import { Component, OnInit } from '@angular/core';
import * as data from '../performance-dashboard/testdata-limits.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-star-rating-dashboard',
  templateUrl: './star-rating-dashboard.component.html',
  styleUrls: ['./star-rating-dashboard.component.css']
})
export class StarRatingDashboardComponent implements OnInit {
  performanceData: any = (data as any).default;
  stateData1: any;
  stateData2: any;
  stateData3: any;
  stateData4: any;
  stateData5: any;
  stateData6: any;
  stateData7: any;
  stateData8: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.stateData1=this.performanceData.Chaps1;
    this.stateData2=this.performanceData.Chaps2;
    this.stateData3=this.performanceData.Chaps3;
    this.stateData4=this.performanceData.Chaps5;
    this.stateData5=this.performanceData.Chaps8;
    this.stateData6=this.performanceData.Chaps9;
    this.stateData7=this.performanceData.Chaps10;
    this.stateData8=this.performanceData.Chaps12;
  }
  aggdash(){
    this.router.navigate(['/aggregate-dashbaord']);
  }
  home(){
    this.router.navigate(['/home']);
  }
}
