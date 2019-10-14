import { Component, OnInit } from "@angular/core";
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { PlantType } from "src/app/shared/models/plant-type";
import { faTree } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-plant-types-new",
  templateUrl: "./plant-types-new.component.html",
  styleUrls: ["./plant-types-new.component.scss"]
})
export class PlantTypesNewComponent implements OnInit {
  faTree = faTree;
  plantType: PlantType = new PlantType();
  constructor(
    private plantTypesService: PlanttypesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  onSubmit() {
    this.plantTypesService.create(this.plantType);
    this.router.navigate(["planttypes"]);
  }
  delete(id: string){
    event.preventDefault();
    this.plantTypesService.delete(id);
    this.router.navigate(["planttypes"]);
  }
  edit(plantType: PlantType){
    event.preventDefault();
    this.plantTypesService.update(plantType.id, plantType);
    this.router.navigate(["planttypes"]);
  }
  async ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get("id");
    if(id !== null){
      let plantType = await this.plantTypesService.getById(id);
      this.plantType = plantType;
    }
  }
}
