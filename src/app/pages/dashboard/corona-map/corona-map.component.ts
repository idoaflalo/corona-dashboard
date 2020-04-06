import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-corona-map',
  templateUrl: './corona-map.component.html',
  styleUrls: ['./corona-map.component.scss'],
})
export class CoronaMapComponent {
  public options: any;
  public set selectedDate(value: string) {
    this._selectedDate = value;
  }
  public get selectedDate() {
    return this._selectedDate;
  }
  public israelMap;
  private _selectedDate: string = '0';

  constructor(private http: HttpClient) {
    this.http.get('assets/map/israelCities.json').subscribe((israelMap: any) => {
      this.israelMap = israelMap;
    });
  }
}
