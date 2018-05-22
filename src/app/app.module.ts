import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YoutubeService } from './_services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent
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
