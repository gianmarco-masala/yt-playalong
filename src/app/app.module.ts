// Core
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Third-party
import { AudioContextModule } from 'angular-audio-context';

// Custom
import { AudioSettingsComponent } from './audio-settings/audio-settings.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarModule } from './navbar/navbar.module';
import { FxRackModule } from './fx-rack/fx-rack.module';
import { MediaManagerModule } from './media-manager/media-manager.module';
import { TransportBarModule } from './transport-bar/transport-bar.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AudioPlayerService } from './audio-player.service';

@NgModule({
  declarations: [AppComponent, AudioSettingsComponent],
  imports: [
    BrowserAnimationsModule,
    AudioContextModule.forRoot('playback'),
    NavbarModule,
    MediaManagerModule,
    FxRackModule,
    ToastrModule.forRoot(),
    TransportBarModule,
    YouTubePlayerModule,
  ],
  providers: [AudioPlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
