import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

export interface Video {
  title: string;
  videoId: string;
  selected?: boolean;
}
@Injectable()
export class AudioPlayerService {
  private player!: YT.Player;
  player$ = of(this.player);
  private state = new Subject<string>();
  state$ = this.state.asObservable();
  private playlist: Video[] = [];
  playlist$ = of(this.playlist);

  constructor() {}

  initPlayer(p: YT.Player) {
    this.player = p;
  }

  loadVideo(video: Video) {
    this.player.loadVideoById(video.videoId);
  }

  addToPlaylist(video: Video) {
    if (!this.playlist.map((v) => v.videoId).includes(video.videoId)) {
      this.playlist.push(video);
    }
  }

  onPlayerStateChange(e: any) {
    switch (e.data) {
      case YT.PlayerState.UNSTARTED:
        break;
      case YT.PlayerState.ENDED:
        this.state.next('ended');
        break;
      case YT.PlayerState.PLAYING:
        this.state.next('playing');
        break;
      case YT.PlayerState.PAUSED:
        this.state.next('paused');
        break;
      case YT.PlayerState.BUFFERING:
        this.state.next('buffering');
        break;
      case YT.PlayerState.CUED:
        this.state.next('video cued');
        break;
      default:
        this.state.next('unknown: ' + e.data);
    }
  }

  play() {
    this.player.playVideo();
  }

  pause() {
    this.player.pauseVideo();
  }

  stop() {
    this.player.stopVideo();
  }

  previous() {
    const prevVideo =
      this.playlist[
        this.playlist.findIndex((video: Video) => video.selected) - 1
      ];
    if (!prevVideo) {
      return;
    }
    prevVideo.selected = true;
    this.loadVideo(prevVideo);
  }

  next() {
    const nextVideo =
      this.playlist[
        this.playlist.findIndex((video: Video) => video.selected) + 1
      ];
    if (!nextVideo) {
      return;
    }
    nextVideo.selected = true;
    this.loadVideo(nextVideo);
  }
}
