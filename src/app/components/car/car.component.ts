import { CarService } from './../../services/car.service';
import { Component,  OnInit, } from '@angular/core';
import { Car } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  colors: Color[] = []


  brands: Brand[]=[]
cars:Car[]=[]
car:Car={id:-1,brandName:"",colorName:"",dailyPrice:-1,descriptions:"",modelYear:-1,name:""}

filterCarText=""

  selectedColorId!: number;
  selectedBrandId!: number;


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

  getBrandId(brandId:number|undefined){
    this.selectedBrandId!=brandId;
    console.log("İçeriden gelen değer(brand) : " + this.selectedBrandId);
  }

  getColorId(colorId:number|undefined){
    this.selectedColorId!=colorId;
    console.log("İçeriden gelen değer : " + this.selectedColorId);
  }




  
}
