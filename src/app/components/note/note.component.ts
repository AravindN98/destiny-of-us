import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  noteText = `
To my favorite person 💖

This little space is just a reminder
that you are always on my mind.
Every smile, every moment —
they mean more to me than words can say.
`;

}
