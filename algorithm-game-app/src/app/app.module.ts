import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase-config';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { Game4Component } from './game4/game4.component';

import { LoaderService } from './loader.service';
import { KeyboardService } from './keyboard.service';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    GameCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ LoaderService, KeyboardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
