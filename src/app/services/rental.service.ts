import { RentalDetail } from './../models/rentalDetaill';
import { ListResponseModel } from './../models/listResponseModel';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:5001/api/rentals/getrentaldetails"
  constructor(private httpClient:HttpClient) { }

  getRental():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl)
  }
}
