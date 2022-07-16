type BreakType = 'Drum' | 'Disc';
type BreakSystem = 'Combo Breking' | 'ABS';
type BikeType = "Road Bike" | 'Sport Bike' | "Scooty" ;
type CoolingType = "Air Cooled" | "Fan Cooled";
type BodyType = "Cruisersr" | "Scooty" | "Commuter" | "Sport";

export type Bike = {
    id: string;
    img: string,
    name: string,
    brand: string,
    bsversion: 'BS6' | 'BS4',
    Description: string,
    price: string | number,
    rating: number,
    displacement: number,
    miledge: number,
    weight: number,
    width: number,
    height: number,
    lenght: number,
    frontwheelsize: number,
    rearwheelsize: number,
    wheeltype: string,
    rearbreaking: BreakType,
    frontbreaking: BreakType,
    breakingSystem: BreakSystem,
    headlight: 'LED' | 'Helozen',
    type: BikeType,
    transmission?: string,
    colors: { name: string, color: string }[],
    fueltype: 'Petrol' | 'Desel',
    cooling_sysem: CoolingType,
    max_power: string | number,
    fueldeliverysystem: string,
    bodytype: BodyType,
    fuelcapacity: number,
    noofcylinders: number,
    groundclearance: number,
    max_torq?: string | number
}