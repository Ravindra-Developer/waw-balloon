import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-anniversary-celebrations',
  templateUrl: './anniversary-celebrations.component.html',
  styleUrls: ['./anniversary-celebrations.component.scss']
})
export class AnniversaryCelebrationsComponent {
  title = 'Anniversary celebrations - waw balloons declaration';

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
