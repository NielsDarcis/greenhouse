import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './shared/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthService } from './services/auth.service'

import { ToCelciusPipe } from './shared/to-celcius.pipe';

import { PlantTypesComponent } from './plants/plant-types/plant-types.component';
import { PlantTypesNewComponent, PlantTypeNewDialog } from './plants/plant-types-new/plant-types-new.component';
import { PlantsListComponent } from './plants/plants-list/plants-list.component';
import { DropMakerComponent } from './shared/drop-maker/drop-maker.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { PlantNewComponent } from './plants/plant-new/plant-new.component';
import { SunMakerComponent } from './shared/sun-maker/sun-maker.component';
import { FrostMakerComponent } from './shared/frost-maker/frost-maker.component';
import { FireMakerComponent } from './shared/fire-maker/fire-maker.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlantTypesComponent,
    PlantTypesNewComponent,
    PlantsListComponent,
    DropMakerComponent,
    SunMakerComponent,
    FrostMakerComponent,
    FireMakerComponent,
    PlantDetailComponent,
    PlantNewComponent,
    ToCelciusPipe,
    PlantTypeNewDialog,
    UserLoginComponent,
  ],
  entryComponents: [
    PlantTypeNewDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'greenhouse'),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot([]),
    FontAwesomeModule,
    AngularFireAuthModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
