import {Component, Input, NgZone, OnInit} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Data } from '../models/data.model';
am4core.useTheme(am4themes_animated);

am4core.useTheme(am4themes_animated);
// Themes end
@Component({
  selector: 'app-floatingbarchart',
  templateUrl: './floatingbarchart.component.html',
  styleUrls: ['./floatingbarchart.component.css']
})
export class FloatingbarchartComponent implements OnInit {

  constructor(private zone: NgZone) { }
  @Input()
  data:Data[];
  ngOnInit() {
    /**
     * Chart design taken from Samsung health app
     */
    this.createChart();
  }
  private createChart(): void {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('floatingbarchart', am4charts.XYChart3D);
      chart.data = this.data;

     /* let title = chart.titles.create();
      title.text = 'CAHPS for MIPS SSM: How Well Providers Communicate';
      title.fontSize = 14;
      title.fontWeight = '300';*/
// Create axes
      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "State";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;

      let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

// Create series
      let series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueX = "MeasurePerformanceRate";
      series.dataFields.categoryY = "State";
      series.name = "MeasurePerformanceRate";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.tooltipText = "{valueX}";
      valueAxis.title.text = "Measure Performance Rate";
      valueAxis.title.fontWeight = "bold";
      categoryAxis.title.text = "State";
      categoryAxis.title.fontWeight = "bold";
      let valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueX.value}";
      series.columns.template.column3D.stroke = am4core.color("#fff");
      series.columns.template.column3D.strokeOpacity = 0.2;
    });
  }
}







