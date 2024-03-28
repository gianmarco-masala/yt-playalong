import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss']
})
export class TransportBarComponent implements OnInit, OnDestroy {
  state!: YT.PlayerState;
  sub!: Subscription;

  constructor(
    private playerService: AudioPlayerService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sub = this.playerService.state$.subscribe((s) => {
      this.state = s;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
