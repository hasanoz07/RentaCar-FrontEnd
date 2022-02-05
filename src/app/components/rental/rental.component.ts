import { RentalService } from './../../services/rental.service';
import { RentalDetail } from './../../models/rentalDetaill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
rentals:RentalDetail[]=[]
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail(){
    this.rentalService.getRental().subscribe(response=>{
      this.rentals=response.data
    })
  }
}
