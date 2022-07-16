import { Component, OnInit } from '@angular/core';
import { getBikesData } from 'src/app/datalayer/bikes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  template: `
    <app-bike [childMessage]=bike></app-bike>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  bike = getBikesData();

  constructor() { }

  ngOnInit(): void {
  }

}
