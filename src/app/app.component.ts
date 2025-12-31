import { Component, ViewChild } from '@angular/core';
import { MusicPlayerComponent } from './components/music-player/music-player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  unlocked = false;
  isNight = false;

  activeSection: 'hero' | 'message' | 'timeline' | 'gallery' | 'new-note' | 'destiny' | 'new-year'= 'hero';


  @ViewChild(MusicPlayerComponent)
  musicPlayer!: MusicPlayerComponent;

  unlockSite() {
    this.unlocked = true;

    // 🎵 Default music starts after login
    setTimeout(() => {
      this.musicPlayer.play('assets/note.mp3');
    });
  }

  toggleTheme() {
    this.isNight = !this.isNight;
  }

show(section: 'hero' | 'message' | 'timeline' | 'gallery' | 'new-note' | 'destiny' | 'new-year') {
  this.activeSection = section;

  switch (section) {
    case 'hero':
      this.musicPlayer.play('assets/note.mp3');
      break;

    case 'message':
      this.musicPlayer.play('assets/message.mp3');
      break;

    case 'timeline':
      this.musicPlayer.play('assets/timeline.mp3');
      break;

    case 'gallery':
      this.musicPlayer.play('assets/gallery.mp3');
      break;

    case 'new-note':
      this.musicPlayer.play('assets/newnote.mp3');
      break;

    case 'destiny':
      this.musicPlayer.play('assets/destiny.mp3');
      break;

    case 'new-year':
      this.musicPlayer.play('assets/newyear.mp3');
      break;

      
  }
}




}
