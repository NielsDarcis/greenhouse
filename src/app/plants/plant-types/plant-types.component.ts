import { Component, OnInit } from "@angular/core";
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import { PlantType } from "../../shared/models/plantType/plant-type";
import { Router } from "@angular/router";
import * as Fuse from 'fuse.js';

@Component({
  selector: "app-plant-types",
  templateUrl: "./plant-types.component.html",
  styleUrls: ["./plant-types.component.scss"]
})
export class PlantTypesComponent implements OnInit {
  plantTypeList: PlantType[] = [];
  printList: PlantType[] = [];
  showFilter: boolean = false;
  searchFilter: string = "";
  constructor(private plantTypesService: PlanttypesService, private router: Router ) {}
  
  async getPlants() {
    this.plantTypeList = await this.plantTypesService.getAll();
    this.printList = this.plantTypeList;
  }

  async ngOnInit() {
    await this.getPlants();
  }
  onfilter() {
    if(this.searchFilter === ""){
      this.printList= this.plantTypeList
      return;
    }
    let options: Object = {
        keys: ['name'],
        includeMatches: true,
        findAllMatches: true
    };
    let fuse: any = new Fuse(this.plantTypeList, options);
    let result: any = fuse.search(this.searchFilter);
    console.log(result)
    let shortResult:any =[];
    for(let item of result){
      shortResult.push(item.item);
    }
    this.printList = shortResult;
  }
  onRowClicked(id: string) {
    this.router.navigate(["planttypes", id]);
  }
}
