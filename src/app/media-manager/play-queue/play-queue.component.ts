import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take, tap } from 'rxjs';
import { AudioPlayerService, Video } from 'src/app/audio-player.service';

@Component({
  selector: 'app-play-queue',
  templateUrl: './play-queue.component.html',
  styleUrls: ['./play-queue.component.scss']
})
export class PlayQueueComponent implements OnInit, OnDestroy {
  playlist!: Video[];
  sub!: Subscription;
  dragging = false;

  constructor(
    private playerService: AudioPlayerService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sub = this.playerService.playlist$.subscribe((p) => {
      this.playlist = p;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onVideoSelected(video: Video) {
    this.playerService.loadVideo(video);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.playerService.playlist$.pipe(
      take(1),
      tap((playlist) =>
        moveItemInArray(playlist, event.previousIndex, event.currentIndex)
      )
    ).subscribe();
  }
}
