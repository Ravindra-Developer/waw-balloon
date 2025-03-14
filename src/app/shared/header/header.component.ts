import { Component, Renderer2,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  
  constructor(private router: Router,public global: GlobalService,private renderer: Renderer2) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // You can put additional logic here if needed
  }

  navigateTo(val: any) {
    const screenWidth = window.innerWidth || 0;

    this.router.navigate([val]);
    this.global.activeTab = val; 
    sessionStorage.setItem('header', val);

    if (screenWidth < 768) {
      // Use Angular Renderer2 for DOM manipulation
      const responsiveBtn = document.getElementById('responsiveBtn');
      
      if (responsiveBtn) {
        this.renderer.selectRootElement(responsiveBtn).click();
      }
    }
  }
}
