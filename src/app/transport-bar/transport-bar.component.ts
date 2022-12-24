import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransportBarComponent implements OnInit {
  player!: YT.Player;
  state!: string;
  isPlaying = false;

  constructor(
    private playerService: AudioPlayerService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.playerService.player$.subscribe((p) => (this.player = p));
    this.playerService.state$.subscribe((s) => {
      this.state = s;
      this.cd.detectChanges();
    });
  }

  onPlay() {
    this.playerService.play();
  }

  onPause() {
    this.playerService.pause();
  }

  onStop() {
    this.playerService.stop();
  }

  onPrevious() {
    // not working: replace with loadByid
    this.playerService.previous();
  }

  onNext() {
    // not working: replace with loadByid
    this.playerService.next();
  }
}
