import {Component, OnInit, Input, ViewChild, ElementRef, OnChanges, ViewEncapsulation, NgZone} from '@angular/core';

import { Data } from '../models/data.model';
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-bar-chartAxis',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chartAxis.component.html',
  styleUrls: ['./bar-chartAxis.component.less'
]
})
export class BarChartAxisComponent implements OnInit {
  constructor(private zone: NgZone) { }
  @Input()
  data:Data[];
  ngOnInit() {
    var chart = am4core.create("chartdiv1", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = this.data;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "State";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 250;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;
// axis break
    var axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 90;
    axisBreak.endValue = 200;
//axisBreak.breakSize = 0.005;

// fixed axis break
    var d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
    axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

// make break expand on hover
    var hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;


    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "State";
    series.dataFields.valueY = "MeasurePerformanceRate";
    series.columns.template.tooltipText = "{valueY.value}";
    valueAxis.title.text = "Measure Performance Rate";
    let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY.value}";
    valueAxis.title.fontWeight = "bold";
    categoryAxis.title.text = "State";
    categoryAxis.title.fontWeight = "bold";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
}

}
