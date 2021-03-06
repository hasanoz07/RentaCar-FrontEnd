import { Color } from './../models/color';
import { ListResponseModel } from './../models/listResponseModel';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
apiUrl="https://localhost:5001/api/colors/getall";
  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)
  }
}
