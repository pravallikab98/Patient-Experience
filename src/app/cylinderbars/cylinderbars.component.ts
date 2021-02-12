import {Component, Input, NgZone, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {Data} from "../models/data.model";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-cylinderbars',
  templateUrl: './cylinderbars.component.html',
  styleUrls: ['./cylinderbars.component.css']
})
export class CylinderbarsComponent implements OnInit {
  @Input()
  data:Data[];
  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      var chart = am4core.create("lineChart", am4charts.XYChart3D);
      chart.paddingBottom = 30;
      chart.angle = 35;

// Add data
      chart.data = this.data;

// Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "State";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let labelTemplate = categoryAxis.renderer.labels.template;
      labelTemplate.rotation = -90;
      labelTemplate.horizontalCenter = "left";
      labelTemplate.verticalCenter = "middle";
      labelTemplate.dy = 10; // moves it a bit down;
      labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.disabled = true;

// Create series
      var series = chart.series.push(new am4charts.ConeSeries());
      series.dataFields.valueY = "MeasurePerformanceRate";
      series.dataFields.categoryX = "State";
      series.columns.template.tooltipText = "{valueY}";
      valueAxis.title.text = "Measure Performance Rate";
      valueAxis.title.fontWeight = "bold";
      categoryAxis.title.text = "State";
      categoryAxis.title.fontWeight = "bold";
      let valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueY.value}";
      var columnTemplate = series.columns.template;
      columnTemplate.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      })

      columnTemplate.adapter.add("stroke", function(stroke, target) {
        return chart.colors.getIndex(target.dataItem.index);
      })

    });

  }
}

