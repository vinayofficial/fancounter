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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    NavbarComponent,
    SafePipe,
    VideoComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'youtube', component: YoutubeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'video/:videoid', component: VideoComponent},
      {path: 'video', component: VideoComponent}
    ])

  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
