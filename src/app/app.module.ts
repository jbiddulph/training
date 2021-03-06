import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentComponent } from './training/current/current.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { StopTrainingComponent } from './training/current/stop-training.component';
import { AuthService } from './auth/auth.service';
import {TrainingService} from './training/training.service';
import {environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AuthService, TrainingService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
