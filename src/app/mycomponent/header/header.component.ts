import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menustate: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  togglemenu(): void {
      const mnu = document.getElementById("mnu")
      if (this.menustate){
        mnu.style.left = '0px';
        this.menustate = false;
      }
      else {
        mnu.style.left = '-100%';
        this.menustate = true;
      }
  } 


}
