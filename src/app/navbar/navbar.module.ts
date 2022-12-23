import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatTooltipModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
