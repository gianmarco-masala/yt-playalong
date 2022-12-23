import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MediaManagerComponent } from './media-manager.component';

@NgModule({
  declarations: [MediaManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [MediaManagerComponent],
})
export class MediaManagerModule {}
