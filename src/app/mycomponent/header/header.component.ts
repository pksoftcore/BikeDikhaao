import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InMemoryBike } from 'src/app/datalayer/in-memory/bikes';
import { SearchDataType } from 'src/app/models/types/bike';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menustate: boolean = true;
  showModal = false
  searchedData: SearchDataType[] = []
  constructor(private bikeService: InMemoryBike, private router: Router) { }

  ngOnInit(): void {
  }

  closeSearch = () => this.showModal = false

  clicked = (link: string) => {
    this.closeSearch();
    this.router.navigate([link])
  }

  handleChange = async (e) => {
    const data = await this.bikeService.getAll({ search: e || '' })
    this.searchedData = data.map(d => ({
      ...d,
      link: `Bike/${d.id}`
    }))
  }

  openSearch = (e, toggler) => {
    this.showModal = true;
    if (window.innerWidth < 992) toggler.click()
    e.blur()
  }

  togglemenu(): void {
    const mnu = document.getElementById("mnu")
    if (this.menustate) {
      mnu.style.left = '0px';
      this.menustate = false;
    }
    else {
      mnu.style.left = '-100%';
      this.menustate = true;
    }
  }


}
