import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InMemoryBike } from 'src/app/datalayer/in-memory/bikes';
import { Bike } from 'src/app/models/types/bike'

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  template: `
      Say {{ message }}
  `,
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  bike: Bike;
  boxWidth = "300px"
  
  constructor(private route: ActivatedRoute, private bikeService: InMemoryBike) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    const get = async () => {
      this.route.params.subscribe(async (params: Params) => {
        const id = params.id
        // some stuff
        const bike = await this.bikeService.get(id);
        console.log(bike);
        this.bike = bike
      });
    }
    get();
  };
  }
