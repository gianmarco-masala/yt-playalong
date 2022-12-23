import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play-queue',
  templateUrl: './play-queue.component.html',
  styleUrls: ['./play-queue.component.scss'],
})
export class PlayQueueComponent {
  @Input() queue!: { title: string; videoId: string }[];
  @Output() videoSelected = new EventEmitter<string>();
  dragging = false;

  onVideoSelected(id: string) {
    this.videoSelected.emit(id);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.queue, event.previousIndex, event.currentIndex);
  }
}
