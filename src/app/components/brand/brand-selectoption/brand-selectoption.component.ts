import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-selectoption',
  templateUrl: './brand-selectoption.component.html',
  styleUrls: ['./brand-selectoption.component.css']
})
export class BrandSelectoptionComponent implements OnInit {

@Output() outputBrandValue = new EventEmitter<number>();
brands: Brand[]=[]

  constructor(private brandService: BrandService) {
    
   }

  ngOnInit(): void {
    this.getBrands();
  }



  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

  selectedBrand(brandId:any){;
    this.outputBrandValue.emit(brandId);
    
  }
}
