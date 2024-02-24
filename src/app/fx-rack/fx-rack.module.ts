import { NgModule } from '@angular/core';
import { AudioMixerService } from '../audio-mixer.service';
import { FxRackComponent } from './fx-rack.component';

@NgModule({
  declarations: [FxRackComponent],
  exports: [FxRackComponent],
  providers: [AudioMixerService]
})
export class FxRackModule {}
