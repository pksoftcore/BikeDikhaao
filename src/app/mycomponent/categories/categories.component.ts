import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InMemoryBike } from 'src/app/datalayer/in-memory/bikes';
import { Category } from 'src/app/models/types/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: Category
  constructor(private bikeService: InMemoryBike) {}

  ngOnInit(): void {
    const get = async () => {
      this.category = await this.bikeService.getAllCategory()
    }
    get()
  }

}
