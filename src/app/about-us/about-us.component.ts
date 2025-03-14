import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  title = 'About us - waw balloons decoration';

constructor(private titleService: Title){
  this.titleService.setTitle(this.title);

  window.scrollTo(0, 0)
}
}
