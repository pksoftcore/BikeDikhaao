import { Component, OnInit } from '@angular/core';
import { getBrandsList } from 'src/app/datalayer/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brand = getBrandsList()

  constructor() { }

  ngOnInit(): void {
  }

}
