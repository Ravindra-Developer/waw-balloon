import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-birthday-decorations',
  templateUrl: './birthday-decorations.component.html',
  styleUrls: ['./birthday-decorations.component.scss']
})
export class BirthdayDecorationsComponent {
  title = 'Birthday decorations - waw balloons decoration';

  constructor(private router: Router, public global: GlobalService,private titleService: Title) {
    this.titleService.setTitle(this.title);

    window.scrollTo(0, 0)
  }

  navigateTo(val: any) {
    this.router.navigate([val])
    this.global.activeTab = val;
    sessionStorage.setItem('header', val)
  }
}
