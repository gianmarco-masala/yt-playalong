import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.scss']
})
export class MediaManagerComponent implements OnInit {
  urlInput: string;
  autoplay = 1;
  queue = [];
  player;
  isPlaying = false;
  videoId: string;

  ngOnInit(): void {
    // Init YT IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstTag = document.getElementsByTagName('script')[0];
    firstTag.parentNode.insertBefore(tag, firstTag);

    // Create player
    window['onYouTubeIframeAPIReady'] = (s) => {
      console.log('OOOOOOOOOOOOO',s);
      
      this.player = new (window as any).YT.Player('ytplayer', {
        playerVars: {
          autoplay: this.autoplay,
          modestbranding: 1,
          controls: 1,
          disablekb: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          playsinline: 1,
        },
        events: {
          'onStateChange': this.onPlayerStateChange,
          'onReady': this.onPlayerReady,
          'onError': this.onPlayerError,
        }
      });
    }
  }

  onPlayerStateChange(e) {
    if (e.target && e.target.videoTitle && e.target.videoTitle !== '') {
      console.log('onPlayerStateChange', e.target.videoTitle);
      // this.queue.push({
      //   title: e.target.videoTitle,
      //   videoId: this.videoId,
      // });
    }
  }
  onPlayerReady(e) {
    console.log('onPlayerReady', e);
  }
  onPlayerError(e) {
    console.log('onPlayerError', e);
  }

  onPlay() {
    this.player.playVideo();
    this.isPlaying = true;
  }

  onPause() {
    this.player.pauseVideo();
    this.isPlaying = false;
  }

  onStop() {
    this.player.stopVideo();
    this.isPlaying = false;
  }

  onAddToQueue() {
    this.videoId = this.getId(this.urlInput);
    this.player.cueVideoById(this.videoId, 0);
    console.log(this.player);
    this.queue.push({
      title: this.player.videoTitle,
      videoId: this.videoId
    });
  }

  onLoadVideo(id: string) {
    this.player.loadVideoById(id);
  }

  getId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }
}
