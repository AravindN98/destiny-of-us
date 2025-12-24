import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { HeroComponent } from './components/hero/hero.component';
import { MessageComponent } from './components/message/message.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FloatingHeartsComponent } from './components/floating-hearts/floating-hearts.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { DestinyComponent } from './components/destiny/destiny.component';

@NgModule({
  declarations: [
    AppComponent,
    LockScreenComponent,
    HeroComponent,
    MessageComponent,
    TimelineComponent,
    GalleryComponent,
    FloatingHeartsComponent,
    MusicPlayerComponent,
    NewNoteComponent,
    DestinyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
