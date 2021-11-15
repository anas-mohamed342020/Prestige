import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [48, 16, 33, 6, 120], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Detail 4  ', 'Detail 3', 'Detail 2', 'Detail 1', ''];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#f8c336', '#3cd6e7', '#a054e5', '#12aeee', '#4D5360'],
      hoverBackgroundColor: ['#f8c336', '#3cd6e7', '#a054e5', '#12aeee', '#616774'],
      borderWidth: 2,
    }
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
