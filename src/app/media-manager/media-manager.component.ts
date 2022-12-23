import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaManagerComponent implements OnInit {
  urlInput: string = 'https://www.youtube.com/watch?v=ldUyF5eaEH8';
  queue: any[] = [];
  player!: YT.Player;
  videoId!: string | null;
  isPlaying = false;
  autoplay = 1;

  constructor(
    private toastrService: ToastrService,
    private cd: ChangeDetectorRef,
    private audioPlayerService: AudioPlayerService
  ) {}

  ngOnInit(): void {
    // Init YT IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstTag = document.getElementsByTagName('script')[0];
    firstTag?.parentNode?.insertBefore(tag, firstTag);

    // Create player
    (window as any).onYouTubeIframeAPIReady = () => {
      this.player = new (window as any).YT.Player('ytplayer', {
        playerVars: {
          autoplay: this.autoplay,
          modestbranding: 1,
          controls: 1,
          disablekb: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          playsinline: 1
        },
        events: {
          onStateChange: (e: any) => this.onPlayerStateChange(e),
          onReady: (e: any) => this.onPlayerReady(e),
          onError: (e: any) => this.onPlayerError(e)
        }
      });

      if (!this.player) {
        this.toastrService.error('No player available', 'ERROR');
      }

      this.audioPlayerService.initPlayer(this.player);
    };
  }

  onPlayerStateChange(e: any) {
    if (e.target && e.target.videoTitle && e.target.videoTitle !== '') {
      if (!this.queue.map((v) => v.videoId).includes(this.videoId)) {
        this.queue.push({
          title: e.target.videoTitle,
          videoId: this.videoId
        });
      }
      this.cd.detectChanges();
    }
  }

  onPlayerReady(e: any) {
    console.log('onPlayerReady', e);
  }

  onPlayerError(e: any) {
    console.log('onPlayerError', e);
  }

  onAddToQueue() {
    this.videoId = this.getId(this.urlInput);

    if (!this.videoId) {
      this.toastrService.error('No video ID found. Try Again', 'Error');
      return;
    }

    // Triggers onPlayerStateChange
    this.player.cueVideoById(this.videoId, 0);
    this.urlInput = '';
  }

  onLoadVideo(id: string) {
    this.player.loadVideoById(id);
  }

  getId(url: string | null) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }
}
