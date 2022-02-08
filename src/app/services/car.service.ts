import { TrustworthyCar } from './../models/trustworthyCar';
import { SingleResponseModel } from './../models/singleResponseModel';

import { Car } from 'src/app/models/carDetail';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl="https://localhost:5001/api/"
  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall"
return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbycolordıd?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandıd?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarById(carId:number):Observable<SingleResponseModel<TrustworthyCar>>{
    let newPath=this.apiUrl+"cars/getbyid?id="+carId
    return this.httpClient.get<SingleResponseModel<TrustworthyCar>>(newPath)
  }
  getCarDetailsById(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyıd?carId="+carId
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
  }
}