import { Component, OnInit, ElementRef, QueryList, ViewChildren, AfterViewInit, ViewChild } from "@angular/core";
import { PlantsService } from "../../services/plants/plants.service";
import { Plant } from "../../shared/models/plant/plant";



@Component({
  selector: "app-location-canvas",
  templateUrl: "./location-canvas.component.html",
  styleUrls: ["./location-canvas.component.scss"]
})
export class LocationCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('listitem', {static : true }) list !: QueryList<ElementRef>;

  item: any;
  plantList: Plant[];
  xAxis = Array(10).fill('x');

  constructor(private plantService: PlantsService) {}

  async getPlants() {
    this.plantList = await this.plantService.getAll();

    setTimeout(() => {
      console.log(this.list);
    })
  }

   coordinates(event, plant){
    this.item = document.getElementById(plant.name);
    let cor =this.item.getBoundingClientRect();
    let topCor = cor.top + pageYOffset;
    let leftCor = cor.left + pageXOffset;
   
   
    this.item.style.position = "absolute";
    this.item.style.top = topCor;
    this.item.style.left = leftCor;
    console.log('check',this.item);
  }

  // changePosition(event, value) {
  //   this.item = document.getElementById(value.name);
  //   console.log(this.item.offsetLeft, this.item.offsetTop);
  //   let bob = { x: this.item.offsetLeft + 50, y: this.item.offsetTop + 50};
  //   console.log(bob);
  //   value.drag = bob;
  //   console.log(value.drag);
  // }

  ngAfterViewInit(){

  }

  ngOnInit() {
    
    this.getPlants();
    console.log(this.xAxis)
    
    
  }
}
