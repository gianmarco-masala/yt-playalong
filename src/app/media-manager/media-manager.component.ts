import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaManagerComponent {
  urlInput: string = 'https://www.youtube.com/watch?v=ldUyF5eaEH8';

  constructor(private audioPlayerService: AudioPlayerService) {}

  onCueVideo() {
    this.audioPlayerService.cueVideo(this.urlInput);
    this.urlInput = '';
  }
}
