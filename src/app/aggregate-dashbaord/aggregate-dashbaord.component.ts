import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './aggregate-limit.json';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aggregate-dashbaord',
  templateUrl: './aggregate-dashbaord.component.html',
  styleUrls: ['./aggregate-dashbaord.component.css']
})
export class AggregateDashbaordComponent implements OnInit {
  totleData: any = (data as any).default;
  aggTopData:any;
  aggBottomData: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.aggTopData=this.totleData.chap1;
    this.aggBottomData=this.totleData.chap2;

  }
  back(){
    this.router.navigate(['/performance-dashbaord']);
  }
  home(){
    this.router.navigate(['/home']);
  }

}
