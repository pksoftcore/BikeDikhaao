import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { InMemoryBike } from 'src/app/datalayer/in-memory/bikes';
import { Bike } from 'src/app/models/types/bike';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  brand = ""
  result = [];
  bike: Bike[]
  constructor(private route: ActivatedRoute, private bikeService: InMemoryBike) { }
  async ngOnInit(): Promise<void> {
    this.brand = this.route.snapshot.params.id;
    this.bike = await this.bikeService.getAll()
    this.result = this.bike.filter(obj => {
      return obj.brand === this.route.snapshot.params.id;
    });
  }
}
