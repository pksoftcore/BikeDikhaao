import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category = [
    {
      cat_name: "Scooter",
      cat_img: "assets/images/cat/scooters.svg",
    },

    {
      cat_name: "Sport",
      cat_img: "assets/images/cat/sports.svg",
    },

    {
      cat_name: "Cruisersr",
      cat_img: "assets/images/cat/cruiser.svg",
    },

    {
      cat_name: "Adventure",
      cat_img: "assets/images/cat/adventure.svg",
    },

    {
      cat_name: "Scrambler",
      cat_img: "assets/images/cat/scrambler.svg",
    },

    {
      cat_name: "Cafe Racer",
      cat_img: "assets/images/cat/cafe-racer.svg",
    },

    {
      cat_name: "Commuter",
      cat_img: "assets/images/cat/commuter.svg",
    },

    {
      cat_name: "Moped",
      cat_img: "assets/images/cat/moped.svg",
    },

    {
      cat_name: "Street Bikes",
      cat_img: "assets/images/cat/street-bikes.svg",
    },
    {
      cat_name: "Super Bikes",
      cat_img: "assets/images/cat/super-bikes.svg",
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
