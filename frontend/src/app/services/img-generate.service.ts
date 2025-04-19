import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {VehicleDto} from "../vehicle/vehicles.dto";
import {API, API_VARS, URLS} from "../const";
import {IdsService} from "./ids.service";

@Injectable({
  providedIn: 'root'
})
export class ImgGenerateService {

  constructor(private ids: IdsService,private http: HttpClient) {
  }

  getVehicleImage(prompt: string): Observable<string> {
    this.ids.set('prompt',prompt)
    return this.http.get<{ url: string }>((`/api/v1/imgs?prompt=${encodeURIComponent(prompt)}`)).pipe(
      map(res => res.url)
    )
  }

}
