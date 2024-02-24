import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { AudioPlayerService, Video } from 'src/app/audio-player.service';

@Component({
  selector: 'app-play-queue',
  templateUrl: './play-queue.component.html',
  styleUrls: ['./play-queue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayQueueComponent implements OnInit {
  playlist$: Observable<Video[]> | undefined;
  dragging = false;

  constructor(private playerService: AudioPlayerService) {}

  ngOnInit() {
    this.playlist$ = this.playerService.playlist$;
  }

  onVideoSelected(video: Video) {
    this.playerService.loadVideo(video.id);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.playlist$?.pipe(
      take(1),
      tap((playlist) =>
        moveItemInArray(playlist, event.previousIndex, event.currentIndex)
      )
    );
  }
}
