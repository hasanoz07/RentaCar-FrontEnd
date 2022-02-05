import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = []
  currnetColor: Color = { id: -1, name: "" }
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColor();
  }
  getColor() {
    this.colorService.getColor().subscribe(response => {
      this.colors = response.data
    })
  }
  setCurrentColor(color: Color) {
    this.currnetColor = color;
  }
  getCurrentColorClass(color:Color){
    if(color==this.currnetColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if(this.currnetColor.id==-1){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  CurrentColorClassDefault(){
    this.currnetColor={id:-1,name:""}
    console.log("test");
  }
}
