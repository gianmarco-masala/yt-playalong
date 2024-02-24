import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransportBarComponent implements OnInit {
  state$!: Observable<YT.PlayerState>;

  constructor(private playerService: AudioPlayerService) {}

  ngOnInit() {
    this.state$ = this.playerService.state$;
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
    this.playerService.previous();
  }

  onNext() {
    this.playerService.next();
  }
}
