import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brand = [
    {
      b_name: "Honda",
      b_img: "assets/images/Honda-Logo.jpg"
    },
    {
      b_name: "Yamaha",
      b_img: "assets/images/yamaha.png"
    },

    {
      b_name: "TVS",
      b_img: "assets/images/TVS.png"
    },

    {
      b_name: "Royal",
      b_img: "assets/images/Royal-logo.png"
    },

    {
      b_name: "Hero",
      b_img: "assets/images/Hero-Logo.png"
    },

    {
      b_name: "Suzuki",
      b_img: "assets/images/suzuki.png"
    },

    {
      b_name: "Bajaj",
      b_img: "assets/images/bajaj.png",
    },

    {
      b_name: "KTM",
      b_img: "assets/images/ktm.jpg",
    },

    {
      b_name: "BMW",
      b_img: "assets/images/ktm.jpg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
