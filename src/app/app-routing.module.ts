import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MnbodyComponent } from './mycomponent/mnbody/mnbody.component'
import { AboutComponent } from './mycomponent/about/about.component'
import { BrandComponent } from './mycomponent/brand/brand.component'
import { BikeComponent } from './mycomponent/bike/bike.component'

const routes: Routes = [
  { path: '', component: MnbodyComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Brand/:id', component: BrandComponent },
  { path: 'Bike/:id', component: BikeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
