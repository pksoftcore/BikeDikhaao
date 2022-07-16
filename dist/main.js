(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/praveen/Projects/BikeDikhaao/src/main.ts */"zUnb");


/***/ }),

/***/ "1PPL":
/*!********************************************************!*\
  !*** ./src/app/mycomponent/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["active"]; };
class HeaderComponent {
    constructor() {
        this.menustate = true;
    }
    ngOnInit() {
    }
    togglemenu() {
        const mnu = document.getElementById("mnu");
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
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 2, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link"], [1, "sr-only"], ["routerLink", "/About", 1, "nav-link", 3, "routerLinkActive"], [1, "form-inline", "my-2", "my-lg-0"], ["id", "searchval", "type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], [1, "my-2", "py-4"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bike Dikhao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap\");\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Original Surfer\", cursive;\n}\n.navbar[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjtBQUNwRjtFQUNFLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yaWdpbmFsK1N1cmZlciZkaXNwbGF5PXN3YXBcIik7XG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiT3JpZ2luYWwgU3VyZmVyXCIsIGN1cnNpdmU7XG59XG5cbi5uYXZiYXIge1xuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "3A4c":
/*!********************************************************!*\
  !*** ./src/app/mycomponent/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "footer", "container", 2, "z-index", "-2"], ["action", "", 1, "subscribe"], ["type", "text", "placeholder", "email"], ["type", "text", "placeholder", "Name"], ["type", "text", "placeholder", "comment"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "48iw":
/*!******************************************************!*\
  !*** ./src/app/mycomponent/brand/brand.component.ts ***!
  \******************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BrandComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Avg Ex-Showroom Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Check OnRoad Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.b_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.b_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", item_r1.b_displacement, "cc, ", item_r1.b_miledge, "kmpl, ", item_r1.b_weight, "kg, ", item_r1.b_max_power, "bhp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", item_r1.b_price, "/-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Bike/", item_r1.b_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.b_rating, " ");
} }
class BrandComponent {
    constructor(route) {
        this.route = route;
        this.brand = "";
        this.result = [];
        this.bike = [
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
        ];
    }
    ngOnInit() {
        console.log(this.route.snapshot.params);
        this.brand = this.route.snapshot.params.id;
        this.result = this.bike.filter(obj => {
            return obj.b_brand === this.route.snapshot.params.id;
        });
        console.log(this.result[0]);
    }
}
BrandComponent.ɵfac = function BrandComponent_Factory(t) { return new (t || BrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandComponent, selectors: [["app-brand"]], decls: 10, vars: 2, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "row"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xl-4"], [1, "card", "mb-4", "box-shadow"], [1, "imgpad", "p-0", "m-0"], ["data-src", "holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text", "text-align-left"], [1, "m-0"], [1, "font-weight-bold", "my-0", "py-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group", "d-block"], [1, "btn", "btn-sm", "btn-outline-success", "d-block", 3, "routerLink"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-star"], [1, "badge", "badge-success"]], template: function BrandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BrandComponent_div_9_Template, 20, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "6BT3":
/*!****************************************************************!*\
  !*** ./src/app/mycomponent/categories/categories.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function CategoriesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.cat_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.cat_name);
} }
class CategoriesComponent {
    constructor() {
        this.category = [
            {
                cat_name: "Scooter",
                cat_img: "assets/images/cat/scooters.svg",
            },
            {
                cat_name: "Sport",
                cat_img: "assets/images/cat/sports.svg",
            },
            {
                cat_name: "Cruisersr",
                cat_img: "assets/images/cat/cruiser.svg",
            },
            {
                cat_name: "Adventure",
                cat_img: "assets/images/cat/adventure.svg",
            },
            {
                cat_name: "Scrambler",
                cat_img: "assets/images/cat/scrambler.svg",
            },
            {
                cat_name: "Cafe Racer",
                cat_img: "assets/images/cat/cafe-racer.svg",
            },
            {
                cat_name: "Commuter",
                cat_img: "assets/images/cat/commuter.svg",
            },
            {
                cat_name: "Moped",
                cat_img: "assets/images/cat/moped.svg",
            },
            {
                cat_name: "Street Bikes",
                cat_img: "assets/images/cat/street-bikes.svg",
            },
            {
                cat_name: "Super Bikes",
                cat_img: "assets/images/cat/super-bikes.svg",
            }
        ];
    }
    ngOnInit() {
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 3, vars: 1, consts: [[1, "row"], ["class", "col-4 col-md-2 col-xl-2", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-2", "col-xl-2"], [1, "mb-4"], [1, "p-0", "m-0"], ["data-src", "holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "text-center", "display-sm-6"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriesComponent_div_2_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".imgpad[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FBQ2YiLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3BhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "6xHk":
/*!****************************************************************!*\
  !*** ./src/app/mycomponent/getstarted/getstarted.component.ts ***!
  \****************************************************************/
/*! exports provided: GetstartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartedComponent", function() { return GetstartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GetstartedComponent {
    constructor() { }
    ngOnInit() {
    }
}
GetstartedComponent.ɵfac = function GetstartedComponent_Factory(t) { return new (t || GetstartedComponent)(); };
GetstartedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetstartedComponent, selectors: [["app-getstarted"]], decls: 9, vars: 0, consts: [[1, "mainget"], ["src", "../assets/images/wall.jpg", "alt", "Responsive image", 1, "img-fluid", "img-blur"], [1, "container", "getstart", "d-none", "d-md-flex"], ["href", "#tab-view", 1, "btn", "btn-primary"]], template: function GetstartedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bike Dikhaao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome dear riders, we are here to help you to find out best suitable bike for your need and budget. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap\");\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  width: 80%;\n  text-align: center;\n}\n.mainget[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"Original Surfer\", cursive;\n  font-variant: small-caps;\n  color: white;\n  scroll-snap-align: start;\n  text-shadow: 1px 1px 1px black;\n}\n.getstart[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  margin-top: 10%;\n  padding: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 2px 1px 8px black;\n  background: rgba(29, 28, 28, 0.755);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldHN0YXJ0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7QUFDcEY7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQ0FBbUM7QUFDckMiLCJmaWxlIjoiZ2V0c3RhcnRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yaWdpbmFsK1N1cmZlciZkaXNwbGF5PXN3YXBcIik7XG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5nZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIk9yaWdpbmFsIFN1cmZlclwiLCBjdXJzaXZlO1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XG59XG4uZ2V0c3RhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMXB4IDhweCBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgyOSwgMjgsIDI4LCAwLjc1NSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Agd6":
/*!****************************************************!*\
  !*** ./src/app/mycomponent/bike/bike.component.ts ***!
  \****************************************************/
/*! exports provided: BikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeComponent", function() { return BikeComponent; });
/* harmony import */ var src_app_datalayer_bikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/datalayer/bikes */ "UNhV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BikeComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background: ", c_r1.color, "");
} }
class BikeComponent {
    constructor(route) {
        this.route = route;
        this.result = [];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        const id = this.route.snapshot.params.id;
        const bikes = Object(src_app_datalayer_bikes__WEBPACK_IMPORTED_MODULE_0__["getBikesData"])();
        this.result = bikes.filter(b => b.id === id);
    }
    ;
}
BikeComponent.ɵfac = function BikeComponent_Factory(t) { return new (t || BikeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BikeComponent, selectors: [["app-bike"]], decls: 79, vars: 25, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "mybox", "my-5"], [1, "row"], [1, "col-12", "col-md-6"], ["alt", "", 1, "img-fluid", 3, "src"], ["id", "bikename"], [1, "text-justify"], ["id", "onprice", "aria-describedby", "onroad"], ["id", "onroad"], [1, "my-3"], [1, "d-flex"], ["class", "round mr-2", 4, "ngFor", "ngForOf"], [1, "bg-light", "font-weight-bold"], [1, "p-4", "border", "d-flex", "justify-content-around", "mb-2"], [1, ""], [1, "mt-4", "pt-2"], [1, "round", "mr-2"], [1, "color"]], template: function BikeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Ex-showroom Price [Delhi]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Colors Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, BikeComponent_div_29_Template, 2, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Full Specifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Mechanism");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Dimentions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/Brand/", ctx.result[0].brand, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.result[0].brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.result[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.result[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.result[0].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.result[0].bsversion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.result[0].Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx.result[0].price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.result[0].colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Model: ", ctx.result[0].name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Brand : ", ctx.result[0].brand, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("BS Version : ", ctx.result[0].bsversion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bike Type : ", ctx.result[0].type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Miledge : ", ctx.result[0].miledge, " kmpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Displacement : ", ctx.result[0].displacement, " CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Power : ", ctx.result[0].max_power, " bhp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Wheel Type : ", ctx.result[0].wheeltype, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rear Break : ", ctx.result[0].rearbreaking, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Frong Break : ", ctx.result[0].frontbreaking, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Weight : ", ctx.result[0].weight, " Kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Width : ", ctx.result[0].width, " cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Height : ", ctx.result[0].height, " cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Lenght : ", ctx.result[0].lenght, " cm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Front Wheel Size : ", ctx.result[0].frontwheelsize, " cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Rear Wheel Size : ", ctx.result[0].rearwheelsize, " cm");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap\");\n\n.mybox[_ngcontent-%COMP%] {\n  font-family: \"Roboto Condensed\", cursive;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#bikename[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#onprice[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  font-weight: bolder;\n}\n\n#onroad[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\n.round[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.color[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpa2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RkFBOEY7O0FBRTlGO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYmlrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuXG4ubXlib3gge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIGN1cnNpdmU7XG59XG5cbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNiaWtlbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jb25wcmljZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jb25yb2FkIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yb3VuZCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5jb2xvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mycomponent_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycomponent/header/header.component */ "1PPL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Bikedikhao';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "router1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    } }, directives: [_mycomponent_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\nbody[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  transform: all 0.2 ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB0cmFuc2Zvcm06IGFsbCAwLjIgZWFzZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "UNhV":
/*!************************************!*\
  !*** ./src/app/datalayer/bikes.ts ***!
  \************************************/
/*! exports provided: getBikesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBikesData", function() { return getBikesData; });
const getBikesData = () => ([
    {
        //Hero Bikes
        id: "Hero1",
        img: "assets/images/Splendor-Pro.jpg",
        name: "Splendor Pro",
        brand: "Hero",
        bsversion: "BS6",
        Description: 'The Hero Splendor Pro is powered by a 97.2 cc single-cylinder,\
      air-cooled engine that produces a maximum power of 8.36PS @ 8000 rpm and maximum torque of 8.05Nm @ 5000 rpm. \
      The engine is a refined unit and as per Hero, can offer a fuel efficiency of 90 kmpl.',
        price: '47,505 - 51,476*',
        rating: 4.4,
        displacement: 97.2,
        miledge: 90,
        weight: 112,
        width: 720,
        height: 1040,
        lenght: 1970,
        frontwheelsize: 1230,
        rearwheelsize: 1230,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Drum",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [
            { name: "gold", color: "gold" },
            { name: "maroon", color: "maroon" },
            { name: "grey", color: "grey" },
            { name: "silver", color: "silver" }
        ],
        fueltype: 'Petrol',
        cooling_sysem: "Air Cooled",
        max_power: '8.36 PS @ 8000 rpm',
        fueldeliverysystem: "",
        bodytype: "Commuter",
        fuelcapacity: 11,
        noofcylinders: 1,
        groundclearance: 159
    },
    //Royal Enfield
    {
        id: "Royal1",
        img: "assets/images/Enfield.jpg",
        name: "Royal Enfield Classic 350",
        brand: "Royal Enfield",
        bsversion: "BS6",
        Description: `Its mechanical simplicity and old-school motor help in giving you some fleeting moments of bliss and the “feel” of riding a RE.`,
        price: '216000',
        rating: 4.6,
        displacement: 350,
        miledge: 65,
        weight: 109,
        width: 30,
        height: 90,
        lenght: 400,
        frontwheelsize: 20,
        rearwheelsize: 20,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Drum",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "black", color: "black" }, { name: "red", color: "red" }, { name: "blue", color: "blue" }],
        fueltype: 'Petrol',
        cooling_sysem: "Air Cooled",
        max_power: '2.5',
        fueldeliverysystem: "",
        bodytype: "Cruisersr",
        fuelcapacity: 11,
        noofcylinders: 1,
        groundclearance: 159
    },
    //Yamaha
    {
        id: "Yamaha1",
        img: "assets/images/yamaR15.jpg",
        name: "Yamaha YZF R15 V3",
        brand: "Yamaha",
        bsversion: "BS6",
        Description: "Splendor is a perfect bike for daily use. ... This bike is lightweight, if you want a heavy bike , this bike is not for you. This bike is not suitable for long rides.",
        price: '186000',
        rating: 4.2,
        displacement: 110,
        miledge: 65,
        weight: 109,
        width: 30,
        height: 90,
        lenght: 400,
        frontwheelsize: 20,
        rearwheelsize: 20,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Drum",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "black", color: "black" }, { name: "red", color: "red" }, { name: "blue", color: "blue" }],
        fueltype: 'Petrol',
        cooling_sysem: "Air Cooled",
        max_power: "2.5",
        fueldeliverysystem: "",
        bodytype: "Sport",
        fuelcapacity: 11,
        noofcylinders: 1,
        groundclearance: 159
    },
    //Suzuki
    {
        id: "Suzuki1",
        img: "assets/images/gixxer.png",
        name: "Gixxer",
        brand: "Suzuki",
        bsversion: "BS6",
        Description: "Stylish Bike",
        price: "156000",
        rating: 4.7,
        displacement: 110,
        miledge: 65,
        weight: 109,
        width: 30,
        height: 90,
        lenght: 400,
        frontwheelsize: 20,
        rearwheelsize: 20,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Drum",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "black", color: "black" }, { name: "red", color: "red" }, { name: "blue", color: "blue" }],
        fueltype: 'Petrol',
        cooling_sysem: "Air Cooled",
        max_power: "2.5",
        fueldeliverysystem: "",
        bodytype: "Sport",
        fuelcapacity: 11,
        noofcylinders: 1,
        groundclearance: 159
    },
    //Honda
    {
        id: "Honda1",
        img: "assets/images/activa.jpg",
        name: "Honda Activa 6G",
        brand: "Honda",
        bsversion: "BS6",
        Description: "Honda Activa 6G is a scooter available at a price range of Rs. 67,843 to 71,089\
       in India. It is available in 4 variants and 8 colours.\
       The Activa 6G is a powered by 109cc BS6 engine.",
        price: "678423",
        rating: 4.8,
        displacement: 109.51,
        miledge: 50,
        weight: 109,
        width: 30,
        height: 90,
        lenght: 400,
        frontwheelsize: 20,
        rearwheelsize: 20,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Drum",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "black", color: "black" }, { name: "red", color: "red" }, { name: "blue", color: "blue" }],
        fueltype: 'Petrol',
        cooling_sysem: "Fan Cooled",
        transmission: "",
        max_power: "12",
        max_torq: "8.79",
        fueldeliverysystem: "",
        bodytype: "Scooty",
        fuelcapacity: 11,
        noofcylinders: 1,
        groundclearance: 159
    },
    {
        id: "Honda2",
        img: "assets/images/shine.png",
        name: "Honda Shine",
        brand: "Honda",
        bsversion: "BS6",
        Description: "Super Cool scooter",
        price: 67922,
        rating: 4.3,
        displacement: 125.51,
        miledge: 60,
        weight: 125,
        width: 30,
        height: 90,
        lenght: 400,
        frontwheelsize: 20,
        rearwheelsize: 20,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Drum",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "black", color: "black" }, { name: "red", color: "red" }, { name: "blue", color: "blue" }],
        fueltype: 'Petrol',
        cooling_sysem: "Fan Cooled",
        transmission: "",
        max_power: 7.6,
        max_torq: 8.79,
        fueldeliverysystem: "",
        bodytype: "Commuter",
        fuelcapacity: 11,
        noofcylinders: 1,
        groundclearance: 159
    },
    {
        id: "Honda3",
        img: "assets/images/brand/honda/grazzia.png",
        name: "Grazziya",
        brand: "Honda",
        bsversion: "BS6",
        Description: "The Honda Grazia is a modern and stylish 125cc scooter for those who want something jazzier than the Activa 125.",
        price: 79952,
        rating: 4.1,
        displacement: 125.51,
        miledge: 50,
        weight: 116,
        width: 130,
        height: 290,
        lenght: 1800,
        frontwheelsize: 20,
        rearwheelsize: 20,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Disc",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "gold", color: "gold" }, { name: "red", color: "red" }, { name: "black", color: "black" }],
        fueltype: 'Petrol',
        cooling_sysem: "Fan Cooled",
        transmission: "Automatic",
        max_power: 7.6,
        max_torq: 8.79,
        fueldeliverysystem: "Fuel Enjection",
        bodytype: "Commuter",
        fuelcapacity: 5.3,
        noofcylinders: 1,
        groundclearance: 159
    },
    {
        id: "Honda4",
        img: "assets/images/brand/honda/Unicorn.png",
        name: "Unicorn",
        brand: "Honda",
        bsversion: "BS6",
        Description: "Honda takes forward its philosophy to the next level with the Unicorn BS-VI that prides itself on the perfect blend of quality, comfort and class.",
        price: 79952,
        rating: 4.1,
        displacement: 125.51,
        miledge: 50,
        weight: 116,
        width: 130,
        height: 290,
        lenght: 1800,
        frontwheelsize: 20,
        rearwheelsize: 20,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Disc",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "red", color: "red" }, { name: "black", color: "black" }],
        fueltype: 'Petrol',
        cooling_sysem: "Fan Cooled",
        transmission: "Automatic",
        max_power: 7.6,
        max_torq: 8.79,
        fueldeliverysystem: "Fuel Enjection",
        bodytype: "Commuter",
        fuelcapacity: 5.3,
        noofcylinders: 1,
        groundclearance: 159
    },
    //TVS
    {
        id: "TVS1",
        img: "assets/images/brand/TVS/apache.png",
        name: "Apache",
        brand: "TVS",
        bsversion: "BS6",
        Description: "Honda takes forward its philosophy to the next level with the Unicorn BS-VI that prides itself on the perfect blend of quality, comfort and class.",
        price: 179952,
        rating: 4.3,
        displacement: 150.51,
        miledge: 35,
        weight: 136,
        width: 130,
        height: 290,
        lenght: 1800,
        frontwheelsize: 120,
        rearwheelsize: 120,
        wheeltype: "Aloy",
        rearbreaking: "Disc",
        frontbreaking: "Disc",
        breakingSystem: "ABS",
        headlight: "LED",
        type: "Road Bike",
        colors: [{ name: "yellow", color: "yellow" }, { name: "yellow", color: "yellow" }],
        fueltype: 'Petrol',
        cooling_sysem: "Fan Cooled",
        transmission: "Manual 5Gear",
        max_power: 11.6,
        max_torq: 10.79,
        fueldeliverysystem: "Fuel Enjection",
        bodytype: "Commuter",
        fuelcapacity: 5.3,
        noofcylinders: 1,
        groundclearance: 159
    },
    {
        id: "TVS2",
        img: "assets/images/brand/TVS/jupiter.png",
        name: "Jupiter",
        brand: "TVS",
        bsversion: "BS6",
        Description: "TVS Jupiter is a variomatic scooter launched in September 2013 by India's TVS Motor Company. The launch of the scooter marked the company's entry into the part of the market that mainly targets females. It is powered by a single-cylinder, four-stroke, 110 cc engine and delivers 5.88 kW at 7,500 rpm. ",
        price: 69952,
        rating: 4.8,
        displacement: 110.51,
        miledge: 55,
        weight: 106,
        width: 130,
        height: 290,
        lenght: 1800,
        frontwheelsize: 110,
        rearwheelsize: 110,
        wheeltype: "Aloy",
        rearbreaking: "Drum",
        frontbreaking: "Drum",
        breakingSystem: "Combo Breking",
        headlight: "LED",
        type: "Scooty",
        colors: [{ name: "red", color: "red" }, { name: "blue", color: "blue" }, { name: "yellow", color: "yellow" }, { name: "white", color: "white" }, { name: "black", color: "black" }],
        fueltype: 'Petrol',
        cooling_sysem: "Air Cooled",
        transmission: "Automatic",
        max_power: 8.6,
        max_torq: 5.79,
        fueldeliverysystem: "Fuel Enjection",
        bodytype: "Scooty",
        fuelcapacity: 5.3,
        noofcylinders: 1,
        groundclearance: 159
    },
]);


/***/ }),

/***/ "WQoe":
/*!********************************************************!*\
  !*** ./src/app/mycomponent/brands/brands.component.ts ***!
  \********************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function BrandsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Brand/", item_r1.b_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.b_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BrandsComponent {
    constructor() {
        this.brand = [
            {
                b_name: "Honda",
                b_img: "assets/images/Honda-Logo.jpg"
            },
            {
                b_name: "Yamaha",
                b_img: "assets/images/yamaha.png"
            },
            {
                b_name: "TVS",
                b_img: "assets/images/TVS.png"
            },
            {
                b_name: "Royal",
                b_img: "assets/images/Royal-logo.png"
            },
            {
                b_name: "Hero",
                b_img: "assets/images/Hero-Logo.png"
            },
            {
                b_name: "Suzuki",
                b_img: "assets/images/suzuki.png"
            },
            {
                b_name: "Bajaj",
                b_img: "assets/images/bajaj.png",
            },
            {
                b_name: "KTM",
                b_img: "assets/images/ktm.jpg",
            },
            {
                b_name: "BMW",
                b_img: "assets/images/ktm.jpg",
            },
        ];
    }
    ngOnInit() {
    }
}
BrandsComponent.ɵfac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(); };
BrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandsComponent, selectors: [["app-brands"]], decls: 2, vars: 1, consts: [[1, "row", "py-5"], ["class", "col-4 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-3"], [1, "m-3", "m-md-5"], [3, "routerLink"], ["data-src", "holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail", "alt", "Card image cap", 1, "card-img-top", 3, "src"]], template: function BrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrandsComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brand);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _mycomponent_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mycomponent/header/header.component */ "1PPL");
/* harmony import */ var _mycomponent_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mycomponent/footer/footer.component */ "3A4c");
/* harmony import */ var _mycomponent_getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mycomponent/getstarted/getstarted.component */ "6xHk");
/* harmony import */ var _mycomponent_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycomponent/card/card.component */ "tuQg");
/* harmony import */ var _mycomponent_mnbody_mnbody_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mycomponent/mnbody/mnbody.component */ "mZH5");
/* harmony import */ var _mycomponent_brands_brands_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mycomponent/brands/brands.component */ "WQoe");
/* harmony import */ var _mycomponent_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mycomponent/categories/categories.component */ "6BT3");
/* harmony import */ var _mycomponent_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mycomponent/about/about.component */ "vjUk");
/* harmony import */ var _mycomponent_brand_brand_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mycomponent/brand/brand.component */ "48iw");
/* harmony import */ var _mycomponent_bike_bike_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mycomponent/bike/bike.component */ "Agd6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _mycomponent_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _mycomponent_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _mycomponent_getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_5__["GetstartedComponent"],
        _mycomponent_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        _mycomponent_mnbody_mnbody_component__WEBPACK_IMPORTED_MODULE_7__["MnbodyComponent"],
        _mycomponent_brands_brands_component__WEBPACK_IMPORTED_MODULE_8__["BrandsComponent"],
        _mycomponent_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"],
        _mycomponent_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        _mycomponent_brand_brand_component__WEBPACK_IMPORTED_MODULE_11__["BrandComponent"],
        _mycomponent_bike_bike_component__WEBPACK_IMPORTED_MODULE_12__["BikeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "mZH5":
/*!********************************************************!*\
  !*** ./src/app/mycomponent/mnbody/mnbody.component.ts ***!
  \********************************************************/
/*! exports provided: MnbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnbodyComponent", function() { return MnbodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getstarted/getstarted.component */ "6xHk");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../brands/brands.component */ "WQoe");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "tuQg");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories/categories.component */ "6BT3");





class MnbodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
MnbodyComponent.ɵfac = function MnbodyComponent_Factory(t) { return new (t || MnbodyComponent)(); };
MnbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MnbodyComponent, selectors: [["app-mnbody"]], decls: 22, vars: 0, consts: [["id", "tab-view", 1, "mnbody", "container-fluid", "container-xl", "py-5"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "justify-content-center", "py-3", "mb-3"], [1, "nav-item"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "false", 1, "nav-link"], ["id", "pills-profile-tab", "data-toggle", "pill", "href", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-contact-tab", "data-toggle", "pill", "href", "#pills-contact", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "mb-4", "pb-4"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container-fluid"], [1, "btn", "btn-secondary"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"]], template: function MnbodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-getstarted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_1__["GetstartedComponent"], _brands_brands_component__WEBPACK_IMPORTED_MODULE_2__["BrandsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"]], styles: [".mnbody[_ngcontent-%COMP%] {\n    scroll-snap-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1uYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6Im1uYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1uYm9keSB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xufSJdfQ== */"] });


/***/ }),

/***/ "tuQg":
/*!****************************************************!*\
  !*** ./src/app/mycomponent/card/card.component.ts ***!
  \****************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Avg Ex-Showroom Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Check OnRoad Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.b_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.b_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", item_r1.b_displacement, "cc, ", item_r1.b_miledge, "kmpl, ", item_r1.b_weight, "kg, ", item_r1.b_max_power, "bhp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", item_r1.b_price, "/-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Bike/", item_r1.b_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.b_rating, " ");
} }
class CardComponent {
    constructor() {
        this.bike = [
            {
                b_id: "Hero1",
                b_img: "assets/images/Splendor-Pro.jpg",
                b_name: "Splendor Pro",
                b_brand: "Hero",
                b_bsversion: "BS6",
                b_Description: '',
                b_price: 56000,
                b_rating: 4.4,
                b_displacement: 110,
                b_miledge: 65,
                b_weight: 109,
                b_width: 30,
                b_height: 90,
                b_lenght: 400,
                b_frontwheelsize: 20,
                b_rearwheelsize: 20,
                b_wheeltype: "Aloy",
                b_breaking: "Disk Break",
                b_breakingSystem: "Combo Breking",
                b_headlight: "LED",
                b_type: "Road Bike",
                b_colors: ["black", "red", "blue"],
                b_about: `Splendor is a perfect bike for daily use.
      This bike is lightweight, if you want a heavy bike , 
      this bike is not for you. This bike is not suitable for long rides.`,
                b_fueltype: 'Petrol',
                b_cooling_sysem: "",
                b_max_power: 2.5,
                b_fueldeliverysystem: ""
            },
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
                b_breaking: "Disk Break",
                b_breakingSystem: "Combo Breking",
                b_headlight: "LED",
                b_type: "Road Bike",
                b_colors: ["black", "red", "blue"],
                b_about: `Splendor is a perfect bike for daily use.
      This bike is lightweight, if you want a heavy bike , 
      this bike is not for you. This bike is not suitable for long rides.`,
                b_fueltype: 'Petrol',
                b_cooling_sysem: "",
                b_max_power: 2.5,
                b_fueldeliverysystem: ""
            },
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
                b_breaking: "Disk Break",
                b_breakingSystem: "Combo Breking",
                b_headlight: "LED",
                b_type: "Road Bike",
                b_colors: ["black", "red", "blue"],
                b_about: `Splendor is a perfect bike for daily use.
      This bike is lightweight, if you want a heavy bike , 
      this bike is not for you. This bike is not suitable for long rides.`,
                b_fueltype: 'Petrol',
                b_cooling_sysem: "",
                b_max_power: 2.5,
                b_fueldeliverysystem: ""
            },
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
                b_breaking: "Disk Break",
                b_breakingSystem: "Combo Breking",
                b_headlight: "LED",
                b_type: "Road Bike",
                b_colors: ["black", "red", "blue"],
                b_about: `Splendor is a perfect bike for daily use.
      This bike is lightweight, if you want a heavy bike , 
      this bike is not for you. This bike is not suitable for long rides.`,
                b_fueltype: 'Petrol',
                b_cooling_sysem: "",
                b_max_power: 2.5,
                b_fueldeliverysystem: ""
            },
            {
                b_id: "Honda1",
                b_img: "assets/images/activa.jpg",
                b_name: "Honda Activa 6G",
                b_brand: "Honda",
                b_bsversion: "BS6",
                b_Description: "Super Cool scooter",
                b_price: 67922,
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
                b_breaking: "Disk Break",
                b_breakingSystem: "Combo Breking",
                b_headlight: "LED",
                b_type: "Road Bike",
                b_colors: ["black", "red", "blue"],
                b_about: `Splendor is a perfect bike for daily use.
      This bike is lightweight, if you want a heavy bike , 
      this bike is not for you. This bike is not suitable for long rides.`,
                b_fueltype: 'Petrol',
                b_cooling_sysem: "Fan Cooled",
                b_transmission: "",
                b_max_power: 0,
                b_max_torq: 8.79,
                b_fueldeliverysystem: ""
            },
            {
                b_id: "Honda2",
                b_img: "assets/images/shine.png",
                b_name: "Honda Shine",
                b_brand: "Honda",
                b_bsversion: "BS6",
                b_description: "Super Cool scooter",
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
                b_breaking: "Disk Break",
                b_breakingSystem: "Combo Breking",
                b_headlight: "LED",
                b_type: "Road Bike",
                b_colors: ["black", "red", "blue"],
                b_about: `Splendor is a perfect bike for daily use.
      This bike is lightweight, if you want a heavy bike , 
      this bike is not for you. This bike is not suitable for long rides.`,
                b_fueltype: 'Petrol',
                b_cooling_sysem: "Fan Cooled",
                b_transmission: "",
                b_max_power: 7.6,
                b_max_torq: 8.79,
                b_fueldeliverysystem: ""
            }
        ];
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "mb-4", "box-shadow"], [1, "imgpad", "p-0", "m-0"], ["data-src", "holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text", "text-align-left"], [1, "m-0"], [1, "font-weight-bold", "my-0", "py-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group", "d-block"], [1, "btn", "btn-sm", "btn-outline-success", "d-block", 3, "routerLink"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-star"], [1, "badge", "badge-success"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 20, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bike);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".imgpad[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FBQ2YiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3BhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mycomponent_mnbody_mnbody_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycomponent/mnbody/mnbody.component */ "mZH5");
/* harmony import */ var _mycomponent_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mycomponent/about/about.component */ "vjUk");
/* harmony import */ var _mycomponent_brand_brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mycomponent/brand/brand.component */ "48iw");
/* harmony import */ var _mycomponent_bike_bike_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mycomponent/bike/bike.component */ "Agd6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _mycomponent_mnbody_mnbody_component__WEBPACK_IMPORTED_MODULE_1__["MnbodyComponent"] },
    { path: 'About', component: _mycomponent_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'Brand/:id', component: _mycomponent_brand_brand_component__WEBPACK_IMPORTED_MODULE_3__["BrandComponent"] },
    { path: 'Bike/:id', component: _mycomponent_bike_bike_component__WEBPACK_IMPORTED_MODULE_4__["BikeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vjUk":
/*!******************************************************!*\
  !*** ./src/app/mycomponent/about/about.component.ts ***!
  \******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 15, vars: 0, consts: [[1, "shadow", "m-5", "p-5"], [1, "my5text-center"], [1, "text-justify"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bike Dikhaao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Author: Praveen Prajapati | Full stack web developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Project type: Acadmic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Version : v0.0.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Technology: Angular | Typescript | JSON | CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "This Website is a mini project of one of my acadamic subject which was HMI ( Human Machine Interaction ), The idea is to help our audience to find best bike as per there need and budget It could be very useful for people before going to the showroom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map