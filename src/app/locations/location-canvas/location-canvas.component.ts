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
  currentPlant: number;
  xAxis = Array(10).fill('x');
  locations: any[];
  

  constructor(private plantService: PlantsService) {
    this.locations = this.generateEmptyLocations(10, 10);
  }
  generateEmptyLocations(cols: number, rows: number) {
    const ret = [];
    for(let ir = 0; ir < rows; ++ir) {
      ret.push(Array(cols).fill('x'));
    }
    return ret;
  }

  async getPlants() {
    this.plantList = await this.plantService.getAll();
   
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev, plantIndex: number) {
    this.currentPlant = plantIndex;
  }
  drop(ev, col, row) {
    this.locations[row][col] = this.plantList[this.currentPlant];
    console.log(this.locations[row][col]);
  }



   coordinates(event, plant){
    // this.item = document.getElementById(plant.name);
    // let cor =this.item.getBoundingClientRect();
    // let topCor = cor.top + pageYOffset;
    // let leftCor = cor.left + pageXOffset;
   
   
    // this.item.style.position = "absolute";
    // this.item.style.top = topCor;
    // this.item.style.left = leftCor;
    // console.log('check',this.item);
  }

 

  ngAfterViewInit(){

  }

  ngOnInit() {
    
    this.getPlants();

   
    
    
  }
}
