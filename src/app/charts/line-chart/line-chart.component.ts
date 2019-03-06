import { Component, OnInit } from '@angular/core';
import {LineChartSampleColors} from '../../Shared/chart.color';

const LineChartSampleData: any[] =
[
  {data: [12,65,76,67,24,87,54], label:'Analysis Service'},
  {data: [56,26,46,13,67,45,15], label:'Recognition Service'},
  {data: [78,24,65,12,57,89,54], label:'Forecasting Service'}
];

const LineChartSampleLabel: string[] =['Jan','Feb','Mar','Apr','May','Jun'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
lineChartData = LineChartSampleData;
lineChartLabels = LineChartSampleLabel;
lineChartOptions: any =
{
  responsive: true,
  maintainAspectRatio:false
};
lineChartLegend: true;
lineChartColors = LineChartSampleColors;
lineChartType = 'line';
  ngOnInit() {
  }

}
