import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Video {
  title: string;
  id: string;
  selected?: boolean;
}
export interface PlayerEvent {
  target: YT.Player | any;
  data: YT.PlayerState;
}

@Injectable()
export class AudioPlayerService {
  private player = new BehaviorSubject<YT.Player | undefined>(undefined);
  player$ = this.player.asObservable();
  private state = new BehaviorSubject<YT.PlayerState>(-1);
  state$ = this.state.asObservable();
  private playlist = new BehaviorSubject<Video[]>([]);
  playlist$ = this.playlist.asObservable();
  currentVideoId: string | undefined;

  constructor() {
    // Init YT IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstTag = document.getElementsByTagName('script')[0];
    firstTag?.parentNode?.insertBefore(tag, firstTag);

    // Create player
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player('ytplayer', {
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          controls: 1,
          disablekb: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          playsinline: 1
        },
        events: {
          onStateChange: (e: PlayerEvent) => this.onPlayerStateChange(e),
          onReady: (e: PlayerEvent) => this.onPlayerReady(e),
          onError: (e: PlayerEvent) => this.onPlayerError(e)
        }
      });
    };
  }

  onPlayerStateChange(e: PlayerEvent) {
    this.state.next(e.data);

    if (
      this.currentVideoId &&
      e.target.videoTitle &&
      e.data === YT.PlayerState.CUED
    ) {
      this.addToPlaylist({
        id: this.currentVideoId,
        title: e.target.videoTitle,
        selected: true
      });
    }
  }

  onPlayerReady(event: { target: YT.Player; data: any }) {
    if (event.target) {
      console.log('onPlayerReady', event);
      this.player.next(event.target);
    }
  }

  onPlayerError(e: any) {
    console.log('onPlayerError', e);
  }

  play() {
    this.player.value?.playVideo();
  }

  pause() {
    this.player.value?.pauseVideo();
  }

  stop() {
    this.player.value?.stopVideo();
  }

  previous() {
    this.player.value?.previousVideo();
  }

  next() {
    this.player.value?.nextVideo();
  }

  loadVideo(videoId: string) {
    this.player.value?.loadVideoById(videoId);
  }

  cueVideo(videoUrl: string) {
    const videoId = this.getId(videoUrl);
    if (!videoId) {
      console.error('No video ID found. Try Again');
      return;
    }

    this.player.value?.cueVideoById(videoId, 0);
    this.currentVideoId = videoId;
  }

  addToPlaylist(video: Video) {
    if (!this.playlist.value.map((v) => v.id).includes(video.id)) {
      this.playlist.next([...this.playlist.value, video]);
    }
  }

  getId(url: string) {
    const match = url.match(
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    );
    return match && match[2].length === 11 ? match[2] : null;
  }
}
