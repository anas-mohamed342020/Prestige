import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {



  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [0, 60, 60, 20, 60, 60, 90], label: 'My First dataset' },
    { data: [0, 50, 50, 30, 50, 50, 90], label: 'My Second dataset' },
    { data: [0, 40, 40, 40, 40, 40, 90], label: 'My third dataset' },
    { data: [0, 30, 30, 50, 30, 30, 90], label: 'My fourth dataset' },
    { data: [0, 20, 20, 60, 20, 20, 90], label: 'My five th dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, 0)',
      borderColor: '#f8c336',
      borderWidth: 3,
      borderStyle:''
    },
    {
      backgroundColor: 'rgba(105, 0, 132, 0)',
      borderColor: '#3cd6e7',
      borderWidth: 3,
      borderStyle:''
    },
    {
      backgroundColor: 'rgba(200, 99, 132, 0)',
      borderColor: '#a054e5',
      borderWidth: 3,
      borderStyle:''
    },
    {
      backgroundColor: 'rgba(105, 0, 132, 0)',
      borderColor: '#3cd6e7',
      borderWidth: 3,
      borderStyle:''
    },
    {
      backgroundColor: 'rgba(105, 0, 132, 0)',
      borderColor: '#f8c336',
      borderWidth: 3,
      borderStyle:''
    },

  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit(): void {
  }



  
}
