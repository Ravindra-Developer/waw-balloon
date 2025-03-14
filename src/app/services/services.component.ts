import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  title = 'Services - waw balloons decoration';

  constructor(private router: Router, public global: GlobalService, private titleService: Title) {
    this.titleService.setTitle(this.title);
    window.scrollTo(0, 0)
  }

  navigateTo(val: any, tab: any) {
    this.router.navigate([val])
    this.global.activeTab = tab;
    sessionStorage.setItem('header', tab)
  }

 
}
