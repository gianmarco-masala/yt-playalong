import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransportBarComponent implements OnInit {
  player!: YT.Player;
  isPlaying = false;

  constructor(private playerService: AudioPlayerService) {}

  ngOnInit() {
    this.playerService.player$.subscribe((p) => (this.player = p));
  }

  onPlay() {
    this.playerService.play();
    this.isPlaying = true;
  }

  onPause() {
    this.playerService.pause();
    this.isPlaying = false;
  }

  onStop() {
    this.playerService.stop();
    this.isPlaying = false;
  }

  onPrevious() {
    // not working: replace with loadByid
    this.playerService.previous();
    this.isPlaying = false;
  }

  onNext() {
    // not working: replace with loadByid
    this.playerService.next();
    this.isPlaying = false;
  }
}
