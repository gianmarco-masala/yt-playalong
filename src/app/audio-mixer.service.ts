import { Injectable } from '@angular/core';
// import { AudioContext } from 'angular-audio-context';

@Injectable()
export class AudioMixerService {
  constructor() {} // private context: AudioContext

  // async setupContext(): Promise<void> {
  //   const extAudioInput = await this.getExtAudioInput();
  //   if (this.context.state === 'suspended') {
  //     await this.context.resume();
  //   }
  //   // Create audio source for external input
  //   const extSource = this.context.createMediaStreamSource(extAudioInput);
  //   extSource.connect(this.context.destination);
  // }

  // // Returns audio incoming from system default input
  // private getExtAudioInput() {
  //   return navigator.mediaDevices.getUserMedia({
  //     audio: {
  //       autoGainControl: false,
  //       echoCancellation: false,
  //       noiseSuppression: false,
  //       latency: 0.003
  //     }
  //   });
  // }
}
