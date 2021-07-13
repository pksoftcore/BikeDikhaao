import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponent/header/header.component';
import { FooterComponent } from './mycomponent/footer/footer.component';
import { GetstartedComponent } from './mycomponent/getstarted/getstarted.component';
import { CardComponent } from './mycomponent/card/card.component';
import { MnbodyComponent } from './mycomponent/mnbody/mnbody.component';
import { BrandsComponent } from './mycomponent/brands/brands.component';
import { CategoriesComponent } from './mycomponent/categories/categories.component';
import { AboutComponent } from './mycomponent/about/about.component';
import { BrandComponent } from './mycomponent/brand/brand.component';
import { BikeComponent } from './mycomponent/bike/bike.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GetstartedComponent,
    CardComponent,
    MnbodyComponent,
    BrandsComponent,
    CategoriesComponent,
    AboutComponent,
    BrandComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
