import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantTypesComponent } from './plant-types/plant-types.component';
import { PlantTypesNewComponent } from './plant-types-new/plant-types-new.component';


const routes: Routes = [
  { path: 'home', component: PlantsListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'plants', component: PlantsComponent },
  { path: 'planttypes', component: PlantTypesComponent},
  { path: 'planttypes/new', component: PlantTypesNewComponent},
  { path: 'plant/new', component: PlantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
