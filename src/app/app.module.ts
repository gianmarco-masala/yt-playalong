// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Third-party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AudioContextModule } from 'angular-audio-context';

// Custom
import { AudioSettingsComponent } from './audio-settings/audio-settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AudioSettingsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AudioContextModule.forRoot('playback'),
    HomeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
