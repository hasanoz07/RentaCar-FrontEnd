import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

apiUrl="https://localhost:5001/api"
  constructor(private httpClient:HttpClient) { }

  getCarImageById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath:string=this.apiUrl+"/carimages/getcarimagebycarıd?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImage():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"/carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getFileById(id: number): Observable<string> {
    let newPath=this.apiUrl+"carimages/getfilebyid?id="+id
    return this.httpClient.get<string>(
    newPath
    );
  }
  getCarImageUrl(id: number): string {
    let newPath=this.apiUrl+"carimages/getfilebyid?id="+id
    return newPath;
  }
}
