import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {LoggedInGuard} from 'ngx-auth-firebaseui';

import { PlantsListComponent } from "./plants/plants-list/plants-list.component";
import { LocationCanvasComponent } from "./locations/location-canvas/location-canvas.component";
import { UserLoginComponent } from './users/user-login/user-login.component'
import { PlantTypesComponent } from "./plants/plant-types/plant-types.component";
import { PlantTypesNewComponent } from "./plants/plant-types-new/plant-types-new.component";
import { PlantDetailComponent } from "./plants/plant-detail/plant-detail.component";
import { PlantNewComponent } from "./plants/plant-new/plant-new.component";

const routes: Routes = [
  { path: "home", component: PlantsListComponent, canActivate: [LoggedInGuard] },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path:"plant/new", component: PlantNewComponent, canActivate: [LoggedInGuard] },
  { path: "planttypes", component: PlantTypesComponent, canActivate: [LoggedInGuard]  },
  { path: "planttypes/new", component: PlantTypesNewComponent, canActivate: [LoggedInGuard]  },
  { path: "planttypes/:id", component: PlantTypesNewComponent, canActivate: [LoggedInGuard]  },
  { path: "plant-details/:id", component: PlantDetailComponent, canActivate: [LoggedInGuard]  },
  { path: "location-canvas", component: LocationCanvasComponent, canActivate: [LoggedInGuard] },
  { path: "login", component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
