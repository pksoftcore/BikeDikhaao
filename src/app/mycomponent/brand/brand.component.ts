import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { getBikesData } from 'src/app/datalayer/bikes';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  brand = ""
  result = [];
  bike = getBikesData()
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.brand = this.route.snapshot.params.id;
    this.result = this.bike.filter(obj => {
      return obj.brand === this.route.snapshot.params.id;
    });
  }
}
