import { Component, OnInit } from '@angular/core';

interface DataRow {
  location: string;
  sickCitizensCount: number;
  percentGrowth: number;
  percentOfPopulation: number;
  isolatedCitizensCount: number;
}

@Component({
  selector: 'ngx-contagion-areas',
  templateUrl: './contagion-areas.component.html',
  styleUrls: ['./contagion-areas.component.css'],
})
export class ContagionAreasComponent implements OnInit {
  columns: ['location', 'sickCitizensCount', 'percentGrowth', 'percentOfPopulation', 'isolatedCitizensCount'];
  data: DataRow[] = [
    {
      location: 'הרצליה',
      sickCitizensCount: 1000,
      percentGrowth: 5,
      percentOfPopulation: 50,
      isolatedCitizensCount: 500,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

