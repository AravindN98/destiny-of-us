import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  template: `
    <!-- <button class="music-btn" (click)="toggle()">
      {{ playing ? '⏸' : '▶️' }}
    </button> -->
  `,
  styles: [`
    .music-btn {
      position: fixed;
      bottom: 80px;
      right: 20px;
      z-index: 20;
      border: none;
      padding: 10px 14px;
      border-radius: 50%;
      font-size: 18px;
      background: #ff6f91;
      color: white;
      cursor: pointer;
    }
  `]
})
export class MusicPlayerComponent {

  audio = new Audio();
  playing = false;
  currentSrc = '';

  /** 🎵 Play a song safely */
  async play(src: string) {
    try {
      // If same song already playing, do nothing
      if (this.currentSrc === src && this.playing) {
        return;
      }

      // Stop previous audio
      this.audio.pause();

      // Change source only if needed
      if (this.currentSrc !== src) {
        this.audio.src = src;
        this.audio.load();
        this.currentSrc = src;
      }

      this.audio.loop = true;
      this.audio.volume = 0.6;

      await this.audio.play(); // 👈 await is KEY
      this.playing = true;

    } catch (err) {
      // ❌ Ignore browser interrupt warnings safely
      console.warn('Audio play interrupted (safe to ignore)');
    }
  }

  /** ⏸ Toggle play / pause */
  toggle() {
    if (this.playing) {
      this.audio.pause();
      this.playing = false;
    } else {
      this.audio.play()
        .then(() => this.playing = true)
        .catch(() => {});
    }
  }
}
