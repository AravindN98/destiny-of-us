import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent {
  dob = '';
  correctDob = '13032001'; // CHANGE DOB
  name = 'Preethu Ma'; // CHANGE NAME
  showHintMessage = false;

  


  wrongAttempt = false;

  heartbeatAudio = new Audio('assets/heartbeat.mp3');
  heartbeatStarted = false;

  @Output() unlocked = new EventEmitter<void>();

  startHeartbeat() {
    if (!this.heartbeatStarted) {
      this.heartbeatAudio.loop = true;
      this.heartbeatAudio.volume = 0.4;
      this.heartbeatAudio.play();
      this.heartbeatStarted = true;
    }
  }

  unlock() {
  this.startHeartbeat();

  if (this.dob === this.correctDob) {

    // Fade out heartbeat
    const fade = setInterval(() => {
      if (this.heartbeatAudio.volume > 0.05) {
        this.heartbeatAudio.volume -= 0.05;
      } else {
        this.heartbeatAudio.pause();
        this.heartbeatAudio.currentTime = 0;
        clearInterval(fade);
      }
    }, 100);

    this.unlocked.emit();
  } else {
    this.wrongAttempt = true;
    this.showHintMessage = true;
    setTimeout(() => (this.wrongAttempt = false), 600);
  }
}


  // unlock() {
  //   this.startHeartbeat();

  //   if (this.dob === this.correctDob) {
  //     this.heartbeatAudio.pause();
  //     this.heartbeatAudio.currentTime = 0;
  //     this.unlocked.emit();
  //   } else {
  //     this.wrongAttempt = true;
  //     setTimeout(() => (this.wrongAttempt = false), 600);
  //   }
  // }
}
