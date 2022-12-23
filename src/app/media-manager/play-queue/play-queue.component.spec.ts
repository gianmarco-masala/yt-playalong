import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQueueComponent } from './play-queue.component';

describe('PlayQueueComponent', () => {
  let component: PlayQueueComponent;
  let fixture: ComponentFixture<PlayQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
