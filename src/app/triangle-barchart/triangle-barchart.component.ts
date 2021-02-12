import {Component, Input, NgZone, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {Data} from "../models/data.model";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-triangle-barchart',
  templateUrl: './triangle-barchart.component.html',
  styleUrls: ['./triangle-barchart.component.css']
})
export class TriangleBarchartComponent implements OnInit {

  constructor(private zone: NgZone) { }
  @Input()
  data:Data[];
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      var chart = am4core.create("triangle-barChart", am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      chart.data = this.data;


      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "State";
      categoryAxis.renderer.minGridDistance = 40;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      var series = chart.series.push(new am4charts.CurvedColumnSeries());
      series.dataFields.categoryX = "State";
      series.dataFields.valueY = "MeasurePerformanceRate";
      series.tooltipText = "{valueY.value}"
      series.columns.template.strokeOpacity = 0;
      series.columns.template.tension = 1;
      valueAxis.title.text = "Measure Performance Rate";
      valueAxis.title.fontWeight = "bold";
      categoryAxis.title.text = "State";
      categoryAxis.title.fontWeight = "bold";
      let valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueY.value}";

      series.columns.template.fillOpacity = 0.75;

      var hoverState = series.columns.template.states.create("hover");
      hoverState.properties.fillOpacity = 1;
      hoverState.properties.tension = 0.8;

      chart.cursor = new am4charts.XYCursor();

// Add distinctive colors for each column using adapter
      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarY = new am4core.Scrollbar();

    });
  }
}

