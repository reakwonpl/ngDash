import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }
pieChartData: number[] = [350,450,140];
pieChartLabels: string[] = ['John',"Maya","Andrzej"]
colors: any[] =[
 
  {
    backgroundColor: ['#265','#eee','#799'],
    borderColor:'rgb(35, 208, 214)'
  }
];
pieChartType = "pie";


  ngOnInit() {
  }

}
