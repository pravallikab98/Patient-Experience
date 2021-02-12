import { Component, OnInit } from '@angular/core';
//import countries from './KPIPage.json';
import  *  as  data  from  './KPIPage.json';
import { Router, ActivatedRoute } from '@angular/router';
import {StarRatingDashboardComponent} from '../star-rating-dashboard/star-rating-dashboard.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items : any;
  org: any;
  timeFrame:any;
  LegendInfo = [];
  timePeriod =[];
  healthOrg =[];
  orgNames : any;
  timefrm : any;
  nrSelect1: any;

  nrSelect2: any;
  products: any = (data as any).default;
  constructor(private router: Router) { }

  ngOnInit(): void {

    for(let result of this.products){

      this.timePeriod.push(result.TimeFrame);
      this.healthOrg.push(result.HealthOrganization);
    }

    this.timefrm = this.timePeriod.filter((el, i, a) => i === a.indexOf(el))
    this.orgNames = this.healthOrg.filter((el, i, a) => i === a.indexOf(el))
    this.items = this.products;
    this.LegendInfo.push({"item":"MeanScore","MeanScore":72.22},{"item":"TopBoxScore","TopBoxScore":67.8});


  }
  changeorg(org) {

    this.org=org;
    this.LegendInfo = [];

    for(let result of this.products){
      if(!this.timeFrame){
        this.timeFrame = result.TimeFrame
      }
      if(this.timeFrame ==result.TimeFrame && this.org ==result.HealthOrganization){

        this.LegendInfo.push({"item":"MeanScore","MeanScore":result.MeanScore},{"item":"TopBoxScore","TopBoxScore":result.TopBoxScore});
        //this.LegendInfo.push({"item":"TopBoxScore","TopBoxScore":result.TopBoxScore});
        console.log(this.LegendInfo);
        // this.LegendInfo.push({TopBoxScore:result.TopBoxScore});

      }
    }


  }
  changetime(event) {

    this.timeFrame = event;
    this.LegendInfo = [];

    for(let result of this.products){
      if(!this.org){
        this.org = result.HealthOrganization
      }
      if(this.timeFrame ==result.TimeFrame && this.org ==result.HealthOrganization){

        this.LegendInfo.push({"item":"MeanScore","MeanScore":result.MeanScore},{"item":"TopBoxScore","TopBoxScore":result.TopBoxScore});
        //this.LegendInfo.push({"item":"TopBoxScore","TopBoxScore":result.TopBoxScore});
        console.log(this.LegendInfo);
        // this.LegendInfo.push({TopBoxScore:result.TopBoxScore});

      }
    }
  }

  perdash(){
    this.router.navigate(['/performance-dashbaord']);
  }
  stardash(){
    this.router.navigate(['/Star-rating-dashboard']);
  }
}

