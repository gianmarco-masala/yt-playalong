import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MatToolbarModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
