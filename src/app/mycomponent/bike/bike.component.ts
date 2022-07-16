import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getBikesData } from 'src/app/datalayer/bikes';
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
  result: Bike[] = [];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    const id = this.route.snapshot.params.id
    const bikes = getBikesData();
    this.result = bikes.filter(b => b.id === id)
  };
  }
