import { Component } from '@angular/core';
import { DataService } from '../data/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  title = 'Gallery - waw balloons decoration';

  constructor(public data: DataService,private titleService: Title) {
    this.titleService.setTitle(this.title);

    window.scrollTo(0, 0)
    console.log(this.data.galleryData)
  }
}
