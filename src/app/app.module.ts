import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AudioContextModule } from 'angular-audio-context';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AudioPlayerService } from './audio-player.service';
import { AudioSettingsComponent } from './audio-settings/audio-settings.component';
import { FxRackModule } from './fx-rack/fx-rack.module';
import { MediaManagerModule } from './media-manager/media-manager.module';
import { NavbarModule } from './navbar/navbar.module';
import { TransportBarModule } from './transport-bar/transport-bar.module';

@NgModule({
  declarations: [AppComponent, AudioSettingsComponent],
  imports: [
    BrowserAnimationsModule,
    // AudioContextModule.forRoot('playback'),
    YouTubePlayerModule,
    NavbarModule,
    MediaManagerModule,
    FxRackModule,
    ToastrModule.forRoot(),
    TransportBarModule
  ],
  providers: [AudioPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
