import { CarImage } from './../../models/carImage';
import { CarImageComponent } from './../car-image/car-image.component';

import { CarService } from './../../services/car.service';

import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
cars:Car[]=[]
car:Car={id:-1,brandName:"",colorName:"",dailyPrice:-1,descriptions:"",modelYear:-1,name:""}
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCar()
      }
    })
  }

  getCar(){
    this.carService.getCar().subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    })
  }


  
}
