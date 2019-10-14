import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlantsListComponent } from "./plants/plants-list/plants-list.component";
import { LocationCanvasComponent } from "./locations/location-canvas/location-canvas.component";

import { PlantTypesComponent } from "./plants/plant-types/plant-types.component";
import { PlantTypesNewComponent } from "./plants/plant-types-new/plant-types-new.component";
import { PlantDetailComponent } from "./plants/plant-detail/plant-detail.component";
import { PlantNewComponent } from "./plants/plant-new/plant-new.component";

const routes: Routes = [
  { path: "home", component: PlantsListComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "plant/new", component: PlantNewComponent },
  { path: "planttypes", component: PlantTypesComponent },
  { path: "planttypes/new", component: PlantTypesNewComponent },
  { path: "planttypes/:id", component: PlantTypesNewComponent },
  { path: "plant-details/:id", component: PlantDetailComponent },
  { path: "location-canvas", component: LocationCanvasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
