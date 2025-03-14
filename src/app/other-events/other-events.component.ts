import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-other-events',
  templateUrl: './other-events.component.html',
  styleUrls: ['./other-events.component.scss']
})
export class OtherEventsComponent {
  title = 'Other event - waw balloons declaration';
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
