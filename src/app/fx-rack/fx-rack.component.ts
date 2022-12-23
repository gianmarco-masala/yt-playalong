import { Component, OnInit } from '@angular/core';
import { AudioMixerService } from '../audio-mixer.service';

@Component({
  selector: 'app-fx-rack',
  templateUrl: './fx-rack.component.html',
  styleUrls: ['./fx-rack.component.scss']
})
export class FxRackComponent implements OnInit {

  constructor(private mixerService: AudioMixerService) { }

  ngOnInit(): void {
    this.mixerService.setupContext();
  }

}
