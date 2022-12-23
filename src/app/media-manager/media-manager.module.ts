import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MediaManagerComponent } from './media-manager.component';

@NgModule({
    declarations: [MediaManagerComponent],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [MediaManagerComponent]
})
export class MediaManagerModule { }