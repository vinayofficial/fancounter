import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './_auth/auth.service';
import { YoutubeService } from './_services/youtube.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SafePipe } from './_pipes/safepipe.pipes';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import{RouterModule}from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    NavbarComponent,
    SafePipe,
    VideoComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SearchResultsComponent,
    SignupComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'youtube', component: YoutubeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'video/:videoid/', component: VideoComponent},
      {path: 'video', component: VideoComponent, canActivate:[AuthService]},
      {path: 'search', component: SearchResultsComponent},
      {path: 'signin', component: SignupComponent}
    ])

  ],
  providers: [YoutubeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
