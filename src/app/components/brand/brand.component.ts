import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';
import { BrandService } from './../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl:'./brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = []
  currentBrand: Brand = { id: -1, name: "" }
  constructor(private brandService: BrandService) { }


  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand
  }

  getCurrnetBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if(this.currentBrand.id==-1){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  CurrentBrandClassDefault(){
    this.currentBrand={id:-1,name:""}
    console.log("test");
  }

}
