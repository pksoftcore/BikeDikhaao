import { Component, OnInit } from '@angular/core';
import { InMemoryBike } from 'src/app/datalayer/in-memory/bikes';
import { Bike } from 'src/app/models/types/bike';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (array.length));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  template: `
    <app-bike [childMessage]=bike></app-bike>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  bike: Bike[];

  constructor(private bikeService: InMemoryBike) { }

  async ngOnInit(): Promise<void> {
    const data = await this.bikeService.getAll()
    this.bike = shuffleArray(data);
  }
}
