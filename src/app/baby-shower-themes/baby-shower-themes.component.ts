import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-baby-shower-themes',
  templateUrl: './baby-shower-themes.component.html',
  styleUrls: ['./baby-shower-themes.component.scss']
})
export class BabyShowerThemesComponent {
  title = 'Baby shower - waw balloons decoration';

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
