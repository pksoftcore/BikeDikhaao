import { Component, OnInit } from '@angular/core';
import { infoData } from 'src/app/datalayer/in-memory/sample-data/info';
import { githubLogo, linkedinLogo } from 'src/assets';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  followMeInfo = infoData;
  constructor() { }
  ngOnInit(): void { }
}
