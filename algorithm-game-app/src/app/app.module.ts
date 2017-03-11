import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase-config';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    MainPageComponent,
    GameListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
