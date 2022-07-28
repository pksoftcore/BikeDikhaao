import { Injectable } from "@angular/core";
import { BikeInerface } from "src/app/models/interface/bike";
import { Bike } from "../../models/types/bike";
import { sampleBikes } from "./sample-data/bikes";
import { sampleCategoriesData } from "./sample-data/category";

@Injectable({ providedIn: 'root' })
export class InMemoryBike implements BikeInerface{
  
  filter(category?: string, brandId?: string): Promise<Bike[]> {
    throw new Error("Method not implemented.");
  }
  
  async getAllCategory(): Promise<any> {
    return await sampleCategoriesData;
  }

  async getAll(filter?: { search?: string }): Promise<Bike[]> {
    const data = await sampleBikes;
    if (filter) {
      if (filter.search === '') return [];
      return data.filter(d => d.name.toLowerCase().includes(filter.search.toLocaleLowerCase()));
    }
    return data;
  }

  async get(id: string): Promise<Bike | null> {
    const bikes = sampleBikes;
    const myBike = bikes.find(b => b.id === id);
    if (myBike) return await myBike;
    return null;
  }
} 
