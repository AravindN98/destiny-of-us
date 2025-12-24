import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-hearts',
  templateUrl: './floating-hearts.component.html',
  styleUrls: ['./floating-hearts.component.css']
})
export class FloatingHeartsComponent {
  hearts = Array.from({ length: 25 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 5,
    size: 14 + Math.random() * 16,
    duration: 6 + Math.random() * 6
  }));
}
