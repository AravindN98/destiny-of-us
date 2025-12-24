import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  memories = [
    {
      title: 'First Talk',
      date: 'September 1st ✨',
      text: 'It all started with a simple conversation that slowly became something special.'
    },
    {
      title: 'First Meet',
      date: 'September 24th 💕',
      text: 'A moment that made everything feel real and closer than ever.'
    }
  ];

}
