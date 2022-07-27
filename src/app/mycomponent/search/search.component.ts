import { Component, Input, OnInit } from '@angular/core';
import { SearchDataType } from 'src/app/models/types/bike';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() handleChange;
  @Input() searchedData;
  @Input() closeSearch

  constructor() { }

  ngOnInit(): void {
  }

}
