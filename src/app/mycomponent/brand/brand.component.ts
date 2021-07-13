import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand = ""
  result = [];
  bike = [
    {

      //Hero Bikes
      b_id: "Hero1",
      b_img: "assets/images/Splendor-Pro.jpg",
      b_name: "Splendor Pro",
      b_brand: "Hero",
      b_bsversion: "BS6",
      b_Description: 'The Hero Splendor Pro is powered by a 97.2 cc single-cylinder,\
      air-cooled engine that produces a maximum power of 8.36PS @ 8000 rpm and maximum torque of 8.05Nm @ 5000 rpm. \
      The engine is a refined unit and as per Hero, can offer a fuel efficiency of 90 kmpl.',
      b_price: '47,505 - 51,476*',
      b_rating: 4.4,
      b_displacement: 97.2,
      b_miledge: 90,
      b_weight: 112,
      b_width: 720,
      b_height: 1040,
      b_lenght: 1970,
      b_frontwheelsize: 1230,
      b_rearwheelsize: 1230,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Drum",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["gold", "maroon", "grey", "silver", "red"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "Air Cooled",
      b_max_power: '8.36 PS @ 8000 rpm',
      b_fueldeliverysystem: "",
      b_bodytype: "Commuter",
      b_fuelcapacity: 11,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    //Royal Enfield
    {
      b_id: "Royal1",
      b_img: "assets/images/Enfield.jpg",
      b_name: "Royal Enfield Classic 350",
      b_brand: "Royal Enfield",
      b_bsversion: "BS6",
      b_Description: `Its mechanical simplicity and old-school motor help in giving you some fleeting moments of bliss and the “feel” of riding a RE.`,
      b_price: 216000,
      b_rating: 4.6,
      b_displacement: 350,
      b_miledge: 65,
      b_weight: 109,
      b_width: 30,
      b_height: 90,
      b_lenght: 400,
      b_frontwheelsize: 20,
      b_rearwheelsize: 20,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Drum",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["black", "red", "blue"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "",
      b_max_power: 2.5,
      b_fueldeliverysystem: "",
      b_bodytype: "Cruisersr",
      b_fuelcapacity: 11,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    //Yamaha
    {
      b_id: "Yamaha1",
      b_img: "assets/images/yamaR15.jpg",
      b_name: "Yamaha YZF R15 V3",
      b_brand: "Yamaha",
      b_bsversion: "BS6",
      b_Description: "Splendor is a perfect bike for daily use. ... This bike is lightweight, if you want a heavy bike , this bike is not for you. This bike is not suitable for long rides.",
      b_price: 186000,
      b_rating: 4.2,
      b_displacement: 110,
      b_miledge: 65,
      b_weight: 109,
      b_width: 30,
      b_height: 90,
      b_lenght: 400,
      b_frontwheelsize: 20,
      b_rearwheelsize: 20,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Drum",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["black", "red", "blue"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "",
      b_max_power: 2.5,
      b_fueldeliverysystem: "",
      b_bodytype: "Sport",
      b_fuelcapacity: 11,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    //Suzuki
    {
      b_id: "Suzuki1",
      b_img: "assets/images/gixxer.png",
      b_name: "Gixxer",
      b_brand: "Suzuki",
      b_bsversion: "BS6",
      b_Description: "Stylish Bike",
      b_price: 156000,
      b_rating: 4.7,
      b_displacement: 110,
      b_miledge: 65,
      b_weight: 109,
      b_width: 30,
      b_height: 90,
      b_lenght: 400,
      b_frontwheelsize: 20,
      b_rearwheelsize: 20,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Drum",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["black", "red", "blue"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "",
      b_max_power: 2.5,
      b_fueldeliverysystem: "",
      b_bodytype: "Sport",
      b_fuelcapacity: 11,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    //Honda
    {
      b_id: "Honda1",
      b_img: "assets/images/activa.jpg",
      b_name: "Honda Activa 6G",
      b_brand: "Honda",
      b_bsversion: "BS6",
      b_Description: "Honda Activa 6G is a scooter available at a price range of Rs. 67,843 to 71,089\
       in India. It is available in 4 variants and 8 colours.\
       The Activa 6G is a powered by 109cc BS6 engine.",
      b_price: 678423,
      b_rating: 4.8,
      b_displacement: 109.51,
      b_miledge: 50,
      b_weight: 109,
      b_width: 30,
      b_height: 90,
      b_lenght: 400,
      b_frontwheelsize: 20,
      b_rearwheelsize: 20,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Drum",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["black", "red", "blue"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "Fan Cooled",
      b_transmission: "",
      b_max_power: 0,
      b_max_torq: 8.79,
      b_fueldeliverysystem: "",
      b_bodytype: "Scooty",
      b_fuelcapacity: 11,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },
    {
      b_id: "Honda2",
      b_img: "assets/images/shine.png",
      b_name: "Honda Shine",
      b_brand: "Honda",
      b_bsversion: "BS6",
      b_Description: "Super Cool scooter",
      b_price: 67922,
      b_rating: 4.3,
      b_displacement: 125.51,
      b_miledge: 60,
      b_weight: 125,
      b_width: 30,
      b_height: 90,
      b_lenght: 400,
      b_frontwheelsize: 20,
      b_rearwheelsize: 20,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Drum",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["black", "red", "blue"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "Fan Cooled",
      b_transmission: "",
      b_max_power: 7.6,
      b_max_torq: 8.79,
      b_fueldeliverysystem: "",
      b_bodytype: "Commuter",
      b_fuelcapacity: 11,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    {
      b_id: "Honda3",
      b_img: "assets/images/brand/honda/grazzia.png",
      b_name: "Grazziya",
      b_brand: "Honda",
      b_bsversion: "BS6",
      b_Description: "The Honda Grazia is a modern and stylish 125cc scooter for those who want something jazzier than the Activa 125.",
      b_price: 79952,
      b_rating: 4.1,
      b_displacement: 125.51,
      b_miledge: 50,
      b_weight: 116,
      b_width: 130,
      b_height: 290,
      b_lenght: 1800,
      b_frontwheelsize: 20,
      b_rearwheelsize: 20,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Disk",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["gold", "red", "black"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "Fan Cooled",
      b_transmission: "Automatic",
      b_max_power: 7.6,
      b_max_torq: 8.79,
      b_fueldeliverysystem: "Fuel Enjection",
      b_bodytype: "Commuter",
      b_fuelcapacity: 5.3,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    {
      b_id: "Honda4",
      b_img: "assets/images/brand/honda/Unicorn.png",
      b_name: "Unicorn",
      b_brand: "Honda",
      b_bsversion: "BS6",
      b_Description: "Honda takes forward its philosophy to the next level with the Unicorn BS-VI that prides itself on the perfect blend of quality, comfort and class.",
      b_price: 79952,
      b_rating: 4.1,
      b_displacement: 125.51,
      b_miledge: 50,
      b_weight: 116,
      b_width: 130,
      b_height: 290,
      b_lenght: 1800,
      b_frontwheelsize: 20,
      b_rearwheelsize: 20,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Disk",
      b_breakingSystem: "Combo Breking",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["gold", "red", "black"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "Fan Cooled",
      b_transmission: "Automatic",
      b_max_power: 7.6,
      b_max_torq: 8.79,
      b_fueldeliverysystem: "Fuel Enjection",
      b_bodytype: "Commuter",
      b_fuelcapacity: 5.3,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    //TVS

    {
      b_id: "TVS1",
      b_img: "assets/images/brand/TVS/apache.png",
      b_name: "Apache",
      b_brand: "TVS",
      b_bsversion: "BS6",
      b_Description: "Honda takes forward its philosophy to the next level with the Unicorn BS-VI that prides itself on the perfect blend of quality, comfort and class.",
      b_price: 179952,
      b_rating: 4.3,
      b_displacement: 150.51,
      b_miledge: 35,
      b_weight: 136,
      b_width: 130,
      b_height: 290,
      b_lenght: 1800,
      b_frontwheelsize: 120,
      b_rearwheelsize: 120,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Diks",
      b_frontbreaking: "Disk",
      b_breakingSystem: "ABS",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["gold", "yellow", "gray"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "Fan Cooled",
      b_transmission: "Manual 5Gear",
      b_max_power: 11.6,
      b_max_torq: 10.79,
      b_fueldeliverysystem: "Fuel Enjection",
      b_bodytype: "Commuter",
      b_fuelcapacity: 5.3,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

    {
      b_id: "TVS2",
      b_img: "assets/images/brand/TVS/jupiter.png",
      b_name: "Jupiter",
      b_brand: "TVS",
      b_bsversion: "BS6",
      b_Description: "TVS Jupiter is a variomatic scooter launched in September 2013 by India's TVS Motor Company. The launch of the scooter marked the company's entry into the part of the market that mainly targets females. It is powered by a single-cylinder, four-stroke, 110 cc engine and delivers 5.88 kW at 7,500 rpm. ",
      b_price: 69952,
      b_rating: 4.8,
      b_displacement: 110.51,
      b_miledge: 55,
      b_weight: 106,
      b_width: 130,
      b_height: 290,
      b_lenght: 1800,
      b_frontwheelsize: 110,
      b_rearwheelsize: 110,
      b_wheeltype: "Aloy",
      b_rearbreaking: "Drum",
      b_frontbreaking: "Drum",
      b_breakingSystem: "Combo Break",
      b_headlight: "LED",
      b_type: "Road Bike",
      b_colors: ["Red", "blue", "yellow", "white", "black"],
      b_fueltype: 'Petrol',
      b_cooling_sysem: "Air Cooled",
      b_transmission: "Automatic",
      b_max_power: 8.6,
      b_max_torq: 5.79,
      b_fueldeliverysystem: "Fuel Enjection",
      b_bodytype: "Scooty",
      b_fuelcapacity: 5.3,
      b_noofcylinders: 1,
      b_groundclearance: 159
    },

  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.brand = this.route.snapshot.params.id;
    this.result = this.bike.filter(obj => {
      return obj.b_brand === this.route.snapshot.params.id;
    });
    console.log(this.result[0])
  }
}