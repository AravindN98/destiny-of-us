import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  photos = [
    'assets/gallery/pic1.jpg',
    'assets/gallery/pic2.jpg',
    'assets/gallery/pic3.jpg',
    'assets/gallery/pic4.jpg',
    'assets/gallery/pic5.jpg'
  ];

  // Fullscreen preview
  selectedPhoto: string | null = null;

  // Like animation
  likedPhoto: string | null = null;

  open(photo: string) {
    this.selectedPhoto = photo;
  }

  close() {
    this.selectedPhoto = null;
  }

  like(photo: string) {
    this.likedPhoto = photo;
    setTimeout(() => this.likedPhoto = null, 700);
  }
}
