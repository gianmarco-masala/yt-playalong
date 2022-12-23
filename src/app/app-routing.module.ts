import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioSettingsComponent } from './audio-settings/audio-settings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'play', pathMatch: 'full' },
  { path: 'play', component: HomeComponent },
  { path: 'settings', component: AudioSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
