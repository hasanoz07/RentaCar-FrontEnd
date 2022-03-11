import { Car } from './../../models/carDetail';
import { CarService } from './../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from './../../services/car-image.service';
import { CarImage } from './../../models/carImage';
import { Component, Input, OnInit } from '@angular/core';
import { TrustworthyCar } from 'src/app/models/trustworthyCar';




@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages: CarImage[] = []
  car!: Car;
  cars: Car[] = []
  succes!:boolean
  imagesPath:string[]=[]

  constructor(
    private carImageService: CarImageService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImageById(params["carId"])
        this.getCarDetailsById(params["carId"])
      }
    })
  }
  getAllCarImages() {
    this.carImageService.getCarImage().subscribe(response => {
      this.carImages = response.data
    })
  }
  getCarImageById(carId: number) {

    this.carImageService.getCarImageById(carId).subscribe(response => {
      this.carImages = response.data
      console.log(this.carImages[0])

    })
  }
  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe(response => {
      this.car = response.data;
      console.log(this.car.name);
    
    });
  }


  
}


