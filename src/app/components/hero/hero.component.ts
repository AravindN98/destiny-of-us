import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {

  text = '';
  full = `This space exists for you, Preethu Ma 💝
You are my favorite place to be ❤️

And this is dedicated to the most favorite person of my life 💗
Without a doubt, you are my happiness, Preethu Ma 💞

This website is not just code or design
it’s a small place where my feelings live,
because some emotions deserve a home 💕

And I found that home in YOU 💖
You complete me 🫶
`;

  private i = 0;
  private timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.i < this.full.length) {
        this.text += this.full[this.i++];
      } else {
        clearInterval(this.timer);
      }
    }, 80);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
