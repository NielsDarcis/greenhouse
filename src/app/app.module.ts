import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './shared/material.module';
import { PlantsComponent } from './plants/plants.component';
import { PlantTypesComponent } from './plant-types/plant-types.component';
import { PlantTypesNewComponent } from './plant-types-new/plant-types-new.component';
import { PlantsListComponent } from './plants-list/plants-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlantsComponent,
    PlantTypesComponent,
    PlantTypesNewComponent,
    PlantsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'greenhouse'),
    AngularFireDatabaseModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'home', component: PlantsListComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'plants', component: PlantsComponent },
      { path: 'planttypes', component: PlantTypesComponent},
      { path: 'planttypes/new', component: PlantTypesNewComponent},
      { path: 'plant/new', component: PlantsComponent},
    ]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
