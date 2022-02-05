import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiUrl="https://localhost:5001/api/customers/getall"
  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
  }
}
