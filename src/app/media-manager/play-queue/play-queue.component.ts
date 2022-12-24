import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AudioPlayerService, Video } from 'src/app/audio-player.service';

@Component({
  selector: 'app-play-queue',
  templateUrl: './play-queue.component.html',
  styleUrls: ['./play-queue.component.scss']
})
export class PlayQueueComponent implements OnInit {
  queue: Video[] = [];
  dragging = false;

  constructor(private playerService: AudioPlayerService) {}

  ngOnInit() {
    this.playerService.playlist$.subscribe((q) => (this.queue = q));
  }

  onVideoSelected(video: Video) {
    this.playerService.loadVideo(video);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.queue, event.previousIndex, event.currentIndex);
  }
}
