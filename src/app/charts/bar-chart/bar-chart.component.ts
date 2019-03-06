import { Component, OnInit } from '@angular/core';

const SampleBarChartData: any[] = 
[
  { data: [65,34,14,64,15,78,89], label: 'Q1'},
  { data: [45,67,75,64,78,13,81], label: 'Q2'} 
];

const SampleBarChartLabels: string[] = ["W1","W2","W3","W4","W5","W6","W7"];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SampleBarChartData;
  public barChartLabels: string[] = SampleBarChartLabels;
  public barChartType ='bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
