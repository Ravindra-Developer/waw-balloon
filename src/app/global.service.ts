import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  activeTab: any = sessionStorage.getItem('header') ? sessionStorage.getItem('header') : 'home';


  reviews: any = [
    {
      name: "Ajay Panigrahi",
      img: "assets/images/profile-user.png",
      message: "Good work.. Creative minds to make look event beautiful.. Humble personality of you two.. Loved the work highly recommend 😊😊😊",
      review: "5"
    },
    {
      name: "Dixit Ramavat",
      img: "assets/images/profile-user.png",
      message: `One of the best.
      Doing his work in detail
      Takes our suggestions also shares his suggestion have called him twice and he has done good job.
      So highly recommend....`,
      review: "5"
    },
    {
      name: "lavina surana",
      img: "assets/images/profile-user.png",
      message: 'Decor was amazing. It was exactly the way we wanted. If you want value for money connect with Vikas (Waw Baloon Decoration) for decor services.',
      review: "5"
    },
    {
      name: "Shilpa Gupta",
      img: "assets/images/profile-user.png",
      message: "The decorations are so beautiful and attractive and qualities of balloons are so good. The company's service is on time and mind blowing. Overall i love w@w ballons event.",
      review: "5"
    },
    {
      name: "Shruti Makharia",
      img: "assets/images/profile-user.png",
      message: `Wow balloons did a fab job for my daughter's day. Vikas was super helpful and shared suggestions to match the theme and the budget. I would highly recommend contacting them for any celebration.`,
      review: "5"
    },
    {
      name: "Aayushi Shah",
      img: "assets/images/profile-user.png",
      message: `Highly appreciate them. Had the entire decoration arranged for us at the very last minute and catered to all our requirements.`,
      review: "5"
    },
    {
      name: "Krupa Vora",
      img: "assets/images/profile-user.png",
      message: `Amazing options and amazing service .. managed to fulfill even at end minute requirements too .. Keep up the good work Vikas ✨✨✨✨`,
      review: "5"
    },
    {
      name: "Sneha Maru",
      img: "assets/images/profile-user.png",
      message: `Superb work. Quick in response.Very clear in instructions.We just discussed everything on phone and he perfectly did everything as I expected and mainly on time.. will definitely suggest everyone!!`,
      review: "5"
    },
    {
      name: "priyashree kapur",
      img: "assets/images/profile-user.png",
      message: `Excellent work and very neat at it
Not only Mr. Vikas and his team reached on time for the Ballon set up but also cleaned everything before leaving
This company is very hardworking and punctual
Keep up the good work
This is a must try company for Excellent Ballon set up`,
      review: "5"
    },
  ]

  responsiveOptions: any = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1
    }

  ]

  constructor(private router: Router) { }
}
