import { Car } from './../../models/carDetail';
import { CarService } from './../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from './../../services/car-image.service';
import { CarImage } from './../../models/carImage';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages: CarImage[] = []
  car!:Car;
  cars:Car[]=[]

  constructor(
    private carImageService: CarImageService,
    private carService:CarService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImageById(params["carId"])
        this.getCarById(params["carId"]).then((res)=>{
          this.car={
          brandName:"toyo",
          colorName:"Siyah",
          dailyPrice:180,
          descriptions:"deneme",
          id:4,
          modelYear:2012,
          name:"toyota corololla"
        }
        })
      }
    })
      console.log(this.car.brandName)
  }
  getAllCarImages() {
    this.carImageService.getCarImage().subscribe(response => {
      this.carImages = response.data
    })
  }
   getCarImageById(carId: number) {
    this.carImageService.getCarImageById(carId).subscribe(response => {
      this.carImages = response.data
    })
  }

  getCarById(carId:number){
    return new Promise<void>((resolve) => {
    this.carService.getCarById(carId).subscribe(response=>{
    this.cars=response.data    
    
    resolve();
    });
  })
}
}

// this.car.id=response.id
//       this.car.brandName=response.brandName
//       this.car.colorName=response.colorName
//       this.car.dailyPrice=response.dailyPrice
//       this.car.modelYear=response.modelYear
//       this.car.name=response.name
//       this.car.descriptions=response.descriptions

