import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubeService } from '../app/_services/youtube.service';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    NavbarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
