import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { RouterModule } from "@angular/router";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./navigation/navigation.component";
import { MaterialModule } from "./shared/material.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxGaugeModule } from "ngx-gauge";
import { AuthService } from "./services/auth.service";

import { PlantTypesComponent } from "./plants/plant-types/plant-types.component";
import {
  PlantTypesNewComponent,
  PlantTypeNewDialog
} from "./plants/plant-types-new/plant-types-new.component";
import { PlantsListComponent } from "./plants/plants-list/plants-list.component";
import { DropMakerComponent } from "./shared/drop-maker/drop-maker.component";
import { PlantDetailComponent } from "./plants/plant-detail/plant-detail.component";
import { PlantNewComponent } from "./plants/plant-new/plant-new.component";
import { SunMakerComponent } from "./shared/sun-maker/sun-maker.component";
import { FrostMakerComponent } from "./shared/frost-maker/frost-maker.component";
import { FireMakerComponent } from "./shared/fire-maker/fire-maker.component";
import { TimeMakerComponent } from "./shared/time-maker/time-maker.component";
import { ToCelciusPipe } from "./shared/to-celcius.pipe";
import { LocationCanvasComponent } from "./locations/location-canvas/location-canvas.component";
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { RoomComponent } from './rooms/room.component';

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
    LocationCanvasComponent,
    PlantTypeNewDialog,
    UserLoginComponent,
    TimeMakerComponent,
    RoomComponent
  ],
  entryComponents: [PlantTypeNewDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "greenhouse"),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot([]),
    FontAwesomeModule,
    AngularFireAuthModule,
    NgxGaugeModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig,
    () => "greenhouse",
    {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
      authGuardFallbackURL: "/login", // url for unauthenticated users - to use in combination with canActivate feature on a route
      authGuardLoggedInURL: "/home", // url for authenticated users - to use in combination with canActivate feature on a route
      passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
      passwordMinLength: 6, // Password length min/max in forms independently of each componenet min/max.
      // Same as password but for the name
      nameMaxLength: 50,
      nameMinLength: 2,
      // If set, sign-in/up form is not available until email has been verified.
      // Plus protected routes are still protected even though user is connected.
      guardProtectedRoutesUntilEmailIsVerified: false
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
