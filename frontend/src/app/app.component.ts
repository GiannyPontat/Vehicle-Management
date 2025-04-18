import {Component, OnInit} from '@angular/core';
import {VehicleDto} from "./vehicle/vehicles.dto";
import {HttpClient} from "@angular/common/http";
import {API, URLS} from "./const";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
vehicles: VehicleDto[] = []

  constructor(private http:HttpClient) {
  }
  //"http://localhost:8080/vehicles"
  ngOnInit(): void{
    this.http.get<VehicleDto[]>(API(URLS.vehicles,'vehicles'))
      .subscribe(vehicles => this.vehicles = vehicles)
  }
}
