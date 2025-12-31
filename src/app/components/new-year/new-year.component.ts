import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-year',
  templateUrl: './new-year.component.html',
  styleUrls: ['./new-year.component.css']
})
export class NewYearComponent implements OnInit {

  text = '';
  private message = `
You know…
as this year is ending, I just feel like saying this out loud.
I keep thinking about one thing and it is YOU Preethu Ma and I just want to pause for a moment… 🌙
And say thank you for making this year the best one and you are the best thing happened to me this year💖

This year didn’t just pass it stayed with me, because you were in it❤️

Thank you for being there for me in ways you probably don’t even realize.
For listening when I overthought, for staying when things felt heavy,
and for choosing me even on days when I wasn’t easy to deal with💖

Thank you for listening to me when my thoughts were messy,
for explaining things patiently when I needed reassurance,
and for staying calm when I wasn’t.
The way you understand me means more to me than you know Babe💕

Somewhere between our conversations, your care, and the way you treat me so gently, you became my comfort.
Talking to you started feeling natural… like home.
And honestly, you became my favorite part of the day Preethu Ma💗

If this year taught me anything, it’s that gratitude feels different when the reason is a person💟

I don’t know what the next year will bring.
There might be happy days, and there might be difficult ones too.
But I want you to know this that no matter how heavy things get,
I’ll be right there with you.
To listen.
To reassure.
To stand by you.
You won’t have to face anything alone Baby💕

Thank you for this year.
For the laughter, 
the trust, 
the warmth, 
and for being you💓

Let’s step into the new year slowly…
with love,
with patience,
and with the comfort of knowing
we have each other💞

Wishing my girl a Happy New Year filled with Happpiness, Joy, Love and everything that makes you happy 💫❤️
`;


  index = 0;
   private scrollInterval: any;
   private typingFinished = false;

  ngOnInit(): void {
     this.startAutoScroll();
    this.typeWriter();
  }

  ngOnDestroy(): void {
    clearInterval(this.scrollInterval);
  }

  typeWriter() {
    if (this.index < this.message.length) {
      this.text += this.message.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), 55);
    } else {
      this.typingFinished = true;
    }
  }
startAutoScroll() {
    this.scrollInterval = setInterval(() => {
      window.scrollBy({ top: 1, behavior: 'smooth' });

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 5;

      // Stop ONLY after typing is done AND bottom reached
      if (this.typingFinished && reachedBottom) {
        clearInterval(this.scrollInterval);
      }
    }, 35);
  }
  
}
