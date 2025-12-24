import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  fullText = `
This note is written with care and feelings 🌸
Every word here is something I want you to remember, today and always 💖
Preethu ma I just want to thank you for everything🫠
You are not just a part of me. You are the whole of me🧿
Talking with you feels like a therapy💟
Please remember no matter how tough life gets Avii is here for you all the time.
Never take stress about work life, remember it's just a part of life.
Let's live our life with no regrets Babyyyyyyyyy❤️
And every heartbeat of this space whispers only one name and it is Preethu Ma 💖
`;

  displayedText = '';
  index = 0;

  showHeartBeat = false;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;

      // 💓 Trigger heartbeat every 15 characters
      if (this.index % 15 === 0) {
        this.pulseHeart();
      }

      setTimeout(() => this.typeWriter(), 65);
    }
  }

  pulseHeart() {
    this.showHeartBeat = true;
    setTimeout(() => this.showHeartBeat = false, 600);
  }
}
