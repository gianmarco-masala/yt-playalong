import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AudioPlayerService {
  private player!: YT.Player;
  player$ = of(this.player);

  constructor() {}

  initPlayer(p: YT.Player) {
    this.player = p;
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
    // not working: replace with loadByid
    this.player.previousVideo();
  }

  next() {
    // not working: replace with loadByid
    this.player.nextVideo();
  }
}
