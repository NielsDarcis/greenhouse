import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlantsListComponent } from "./plants/plants-list/plants-list.component";

import { PlantTypesComponent } from "./plants/plant-types/plant-types.component";
import { PlantTypesNewComponent } from "./plants/plant-types-new/plant-types-new.component";
import { PlantDetailComponent } from "./plants/plant-detail/plant-detail.component";

const routes: Routes = [
  { path: "home", component: PlantsListComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "planttypes", component: PlantTypesComponent },
  { path: "planttypes/new", component: PlantTypesNewComponent },
  { path: "plant-details/:id", component: PlantDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
