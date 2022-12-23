import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaManagerComponent implements OnInit {
  urlInput: string = 'https://www.youtube.com/watch?v=ldUyF5eaEH8';
  autoplay = 1;
  queue: any[] = [];
  player: any;
  isPlaying = false;
  videoId!: string | null;

  constructor(
    private toastrService: ToastrService,
    private cd: ChangeDetectorRef
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
          playsinline: 1,
        },
        events: {
          onStateChange: (e: any) => this.onPlayerStateChange(e),
          onReady: (e: any) => this.onPlayerReady(e),
          onError: (e: any) => this.onPlayerError(e),
        },
      });

      if (!this.player) {
        this.toastrService.error('No player available', 'ERROR');
      }
    };
  }

  onPlayerStateChange(e: any) {
    if (e.target && e.target.videoTitle && e.target.videoTitle !== '') {
      if (!this.queue.map((v) => v.videoId).includes(this.videoId)) {
        this.queue.push({
          title: e.target.videoTitle,
          videoId: this.videoId,
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

  onPlay() {
    this.player.playVideo();
    this.isPlaying = true;
  }

  onPause() {
    this.player.pauseVideo();
    this.isPlaying = false;
  }

  onStop() {
    this.player.stopVideo();
    this.isPlaying = false;
  }

  onAddToQueue() {
    this.videoId = this.getId(this.urlInput);
    // Triggers onPlayerStateChange
    this.player.cueVideoById(this.videoId, 0);
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
