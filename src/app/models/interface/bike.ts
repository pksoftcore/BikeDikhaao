import { Bike } from "../types/bike";

export interface BikeInerface {
    getAll(): Promise<Bike[]>
    get(id: string): Promise<Bike>
    filter(category?: string, brandId?: string): Promise<Bike[]>
    getAllCategory(): Promise<any>;
}