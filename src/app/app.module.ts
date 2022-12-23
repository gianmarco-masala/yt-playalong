// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Third-party
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AudioContextModule } from 'angular-audio-context';

// Custom
import { AudioSettingsComponent } from './audio-settings/audio-settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    AudioSettingsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    // NgbModule,
    AudioContextModule.forRoot('playback'),
    HomeModule,
    NavbarModule,
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
