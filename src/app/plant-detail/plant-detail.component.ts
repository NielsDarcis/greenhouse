import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlantsService } from "../services/plants/plants.service";
import { Plant } from "../shared/models/plant/plant";
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-plant-detail",
  templateUrl: "./plant-detail.component.html",
  styleUrls: ["./plant-detail.component.scss"]
})
export class PlantDetailComponent implements OnInit {
  faLeaf= faLeaf;
  plantId: string;
  plantList: Plant[];
  plant: Plant = new Plant();

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantsService
  ) {}

  async getPlantById() {
    this.plantList = await this.plantService.getAll();
    this.plant = this.plantList.find(plant => plant.Id === this.plantId);
  }

  onSubmit() {
    this.plantService.update(this.plantId, this.plant);
    
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.plantId = id;
    this.getPlantById();
  }
}
