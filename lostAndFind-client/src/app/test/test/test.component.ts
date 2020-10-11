import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  ngOnInit() {
  }


  // //pie
  // public PieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public PieChartLabels: Label[] = []; // ['Download', 'Store', 'Sales'];
  // public PieChartData: SingleDataSet = []; // [300, 500, 100];
  // public PieChartType: ChartType = 'pie';
  // public PieChartLegend = true;
  // public PieChartPlugins = [];
  // public pieChartColors = [{
  //   backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  // }];

  // //bar
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //           callback: function (value, index, values) {
  //             return 'Rs.' + value;
  //           }
  //         }
  //       }
  //     ]
  //   }
  // };
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = false;
  // public barChartPlugins = [];

  // public barChartColors: Color[] = [
  //   {
  //     borderColor: 'darkgreen',
  //     backgroundColor: 'rgba(102, 187, 106, 0.75)',
  //   },
  // ];

  // public barChartLabels: Label[];
  // public barChartData: ChartDataSets[];

  // //linechart
  // lineChartData: ChartDataSets[];
  // lineChartLabels: Label[];

  // lineChartOptions = {
  //   responsive: true,

  //   maintainAspectRatio: false,
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //           stepSize: 1
  //         }
  //       }
  //     ]
  //   }
  // };

  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'darkred',
  //     backgroundColor: 'rgba(239, 83, 80, 0.5)',
  //   },
  // ];

  // lineChartLegend = false;
  // lineChartPlugins = [];
  // lineChartType = 'line';

  // //category pie chart
  // public categoryPieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public categoryPieChartLabels: Label[]; // ['Download', 'Store', 'Sales'];
  // public categoryPieChartData: SingleDataSet; // [300, 500, 100];
  // public categoryPieChartType: ChartType = 'pie';
  // public categoryPieChartLegend = true;
  // public categoryPieChartPlugins = [];

}
