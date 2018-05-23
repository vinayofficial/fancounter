import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YoutubeService } from '../app/_services/youtube.service';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SafePipe } from './_pipes/safePipe.pipes';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    NavbarComponent,
    SafePipe,
    VideoComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'home', component: YoutubeComponent},
      {path: 'video/:videoid', component: VideoComponent},
      {path: 'video', component: VideoComponent}
    ])

  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
