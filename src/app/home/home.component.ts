import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import * as $ from 'jquery';
import { DataService } from '../data/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'Waw Balloons Decoration | Mumbai | Unique Balloon Decor for Birthdays & Parties';

  @ViewChild('projectCount') projectCount!: ElementRef;
  @ViewChild('clientsCount') clientsCount!: ElementRef;
  @ViewChild('membersCount') membersCount!: ElementRef;
  @ViewChild('awardsCount') awardsCount!: ElementRef;

  private animationStarted = false;

  constructor(private router: Router, public global: GlobalService, public data: DataService, private titleService: Title) {
    this.titleService.setTitle(this.title);
    window.scrollTo(0, 0)
  }

  navigateTo(val: any, tab: any) {
    this.router.navigate([val])
    this.global.activeTab = tab;
    sessionStorage.setItem('header', tab)
  }

  ngAfterViewInit() {
    // Initial setup, but don't start the animation yet
    this.prepareCounters();
  }


  private prepareCounters() {
    // Initialize counters, but don't start animation
    this.initializeCounter(this.projectCount.nativeElement, 800);
    this.initializeCounter(this.clientsCount.nativeElement, 1400);
    this.initializeCounter(this.membersCount.nativeElement, 10);
    this.initializeCounter(this.awardsCount.nativeElement, 10);
  }

  private initializeCounter(element: any, initialValue: number) {
    element.textContent = initialValue;
  }

  private animateCounter(element: any, targetValue: number) {
    let current = 0;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / targetValue));

    const counter = setInterval(() => {
      current += 1;
      element.textContent = current;

      if (current === targetValue) {
        clearInterval(counter);
      }
    }, stepTime);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const elementInView = this.isElementInView();
    if (elementInView && !this.animationStarted) {
      this.animationStarted = true;
      this.animateCounters();
    }
  }

  private isElementInView() {
    const rect = this.projectCount.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }

  private animateCounters() {
    // Start the animation when the section is in view
    this.animateCounter(this.projectCount.nativeElement, 800);
    this.animateCounter(this.clientsCount.nativeElement, 1400);
    this.animateCounter(this.membersCount.nativeElement, 10);
    this.animateCounter(this.awardsCount.nativeElement, 10);
  }
}
