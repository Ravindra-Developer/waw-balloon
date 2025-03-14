import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  galleryData: any = [
    {
      id: 0,
      stars: [
        {
          val: 1,
          imgPath: "assets/images/stars/birthday__decoration_star.png",
          altTxt: "birthday decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/birthday/unicorn.jpeg",
          altTxt: "birthday decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/birthday/micky_mouse.jpeg",
          altTxt: "birthday decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/birthday/coco_melon.jpeg",
          altTxt: "birthday decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/birthday/4th.jpeg",
          altTxt: "birthday decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/birthday/5th.jpeg",
          altTxt: "birthday decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/birthday/6th.jpeg",
          altTxt: "birthday decoration image"
        }
      ]
    },
    {
      id: 1,
      birthday: [
        {
          val: 1,
          imgPath: "assets/images/birthday/birthday__decoration__01.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/birthday/birthday__decoration__02.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/birthday/birthday__decoration__03.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/birthday/birthday__decoration__04.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/birthday/birthday__decoration__05.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/birthday/birthday__decoration__06.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/birthday/birthday__decoration__07.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 8,
          imgPath: "assets/images/birthday/birthday__decoration__08.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 9,
          imgPath: "assets/images/birthday/birthday__decoration__09.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 10,
          imgPath: "assets/images/birthday/birthday__decoration__10.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 11,
          imgPath: "assets/images/birthday/birthday__decoration__11.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 12,
          imgPath: "assets/images/birthday/birthday__decoration__12.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 13,
          imgPath: "assets/images/birthday/birthday__decoration__13.jpg",
          altTxt: "birthday decoration image"
        },
        {
          val: 14,
          imgPath: "assets/images/birthday/birthday__decoration__14.jpg",
          altTxt: "birthday decoration image"
        }
      ]
    },
    {
      id: 2,
      babyShower: [
        {
          val: 1,
          imgPath: "assets/images/baby_shower/babyshower__decoration__01.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/baby_shower/babyshower__decoration__02.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/baby_shower/babyshower__decoration__03.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/baby_shower/babyshower__decoration__04.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/baby_shower/babyshower__decoration__05.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/baby_shower/babyshower__decoration__06.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/baby_shower/babyshower__decoration__07.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 8,
          imgPath: "assets/images/baby_shower/babyshower__decoration__08.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 9,
          imgPath: "assets/images/baby_shower/babyshower__decoration__09.jpg",
          altTxt: "baby shower decoration image"
        },
        {
          val: 10,
          imgPath: "assets/images/baby_shower/babyshower__decoration__10.jpg",
          altTxt: "baby shower decoration image"
        },
      ]
    },
    {
      id: 3,
      anniversary: [
        {
          val: 1,
          imgPath: "assets/images/anniversary/anniversary_decoration__01.jpg",
          altTxt: "anniversary decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/anniversary/anniversary_decoration__02.jpg",
          altTxt: "anniversary decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/anniversary/anniversary_decoration__03.jpg",
          altTxt: "anniversary decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/anniversary/anniversary_decoration__04.jpg",
          altTxt: "anniversary decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/anniversary/anniversary_decoration__05.jpg",
          altTxt: "anniversary decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/anniversary/anniversary_decoration__06.jpg",
          altTxt: "anniversary decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/anniversary/anniversary_decoration__07.jpg",
          altTxt: "anniversary decoration image"
        },
        {
          val: 8,
          imgPath: "assets/images/anniversary/anniversary_decoration__08.jpg",
          altTxt: "anniversary decoration image"
        },
      ]
    },
    {
      id: 4,
      welcomeBaby: [
        {
          val: 1,
          imgPath: "assets/images/Welcome_baby/Welcome_baby_decoration__01.png",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/Welcome_baby/Welcome_baby_decoration__02.png",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/Welcome_baby/Welcome_baby_decoration__03.png",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/Welcome_baby/Welcome_baby_decoration__04.png",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/Welcome_baby/5th.jpeg",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/Welcome_baby/6th.jpeg",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/Welcome_baby/Welcome_baby_decoration__07.png",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 8,
          imgPath: "assets/images/Welcome_baby/8th.jpeg",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 9,
          imgPath: "assets/images/Welcome_baby/Welcome_baby_decoration__09.png",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 10,
          imgPath: "assets/images/Welcome_baby/10th.jpeg",
          altTxt: "welcome baby decoration image"
        },
        {
          val: 11,
          imgPath: "assets/images/Welcome_baby/Welcome_baby_decoration__11.png",
          altTxt: "welcome baby decoration image"
        },
      ]
    },
    {
      id: 5,
      heliumBalloons: [
        {
          val: 1,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__01.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__02.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__03.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__04.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__05.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/helium_balloons/22.jpeg",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/helium_balloons/15.jpeg",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 8,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__08.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 9,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__09.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 10,
          imgPath: "assets/images/helium_balloons/helium_balloons_decoration__10.png",
          altTxt: "helium balloons decoration image"
        },
        {
          val: 11,
          imgPath: "assets/images/helium_balloons/last.jpeg",
          altTxt: "helium balloons decoration image"
        }, 
      ]
    },
    {
      id: 6,
      roomDecor: [
        {
          val: 1,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__01.png",
          altTxt: "room decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__02.png",
          altTxt: "room decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__03.png",
          altTxt: "room decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__04.png",
          altTxt: "room decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__05.png",
          altTxt: "room decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__06.png",
          altTxt: "room decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__07.png",
          altTxt: "room decoration image"
        },
        {
          val: 8,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__08.png",
          altTxt: "room decoration image"
        },
        {
          val: 9,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__09.png",
          altTxt: "room decoration image"
        },
        {
          val: 10,
          imgPath: "assets/images/Room_decor/Room_decor_decoration__10.png",
          altTxt: "room decoration image"
        },
      ]
    },
    {
      id: 7,
      corporateDecoration: [
        {
          val: 1,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__01.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 2,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__02.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 3,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__03.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 4,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__04.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 5,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__05.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 6,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__06.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 7,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__07.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 8,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__08.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 9,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__09.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 10,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__10.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 11,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__11.png",
          altTxt: "corporate decoration image"
        },
        {
          val: 12,
          imgPath: "assets/images/Corporate_decoration/Corporate_decoration__12.png",
          altTxt: "corporate decoration image"
        },
      ]
    },

  ]


  constructor() { }
}
