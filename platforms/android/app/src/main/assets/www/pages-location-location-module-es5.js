(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-location-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLocationLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"headingtitle\">Global</ion-title>\n    <ion-icon slot=\"end\" name=\"ellipsis-horizontal-outline\" (click)=\"weatherupdate()\"></ion-icon>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\">\n      <h5>Today, 4:22:36 pm</h5>\n  </div>\n\n\n  <ion-row>\n \n    <ion-col  size=\"10\" style=\"padding-left: 5rem;\">\n      <ion-item class=\"ion-text-center\" lines=\"none\">\n        <ion-icon name=\"sunny\" ></ion-icon>\n        <ion-label>6:25 am</ion-label>\n      \n     \n        <ion-icon name=\"moon\" ></ion-icon>\n        <ion-label>6:30pm</ion-label>\n      </ion-item>\n    </ion-col>\n     \n  </ion-row>\n  <div class=\"ion-text-center\">\n    <ion-icon name=\"ellipse\" style=\"font-size: 38px;\"></ion-icon>\n    <ion-label style=\"font-size: 30px;\">Clear</ion-label>\n</div>\n\n\n<ion-row>\n  <ion-col size=\"6\" class=\"ion-text-end\">Temperature</ion-col>\n  <ion-col size=\"6\" class=\"ion-text-start\">22 C</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\" class=\"ion-text-end\">Air Pressure</ion-col>\n  <ion-col size=\"6\" class=\"ion-text-start\">1014hPa</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\" class=\"ion-text-end\">Humidity</ion-col>\n  <ion-col size=\"6\" class=\"ion-text-start\">33 %</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\" class=\"ion-text-end\">Wind Speed</ion-col>\n  <ion-col size=\"6\" class=\"ion-text-start\">4.82 m/s</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"6\" class=\"ion-text-end\">Wind Degree</ion-col>\n  <ion-col size=\"6\" class=\"ion-text-start\">351</ion-col>\n</ion-row>\n\n\n  <ion-row>\n    <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n      <ion-slide>\n        <h1>Awesome Slide Content</h1>\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n      </ion-slide>\n      <ion-slide>\n        <h1>Awesome Slide Content</h1>\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n      </ion-slide>\n    </ion-slides>\n    \n    </ion-row>\n\n<div >\n  <ion-item color=\"light\" lines=\"full\">\n     <ion-icon size=\"small\" slot=\"start\" name=\"cloudy-outline\"></ion-icon>\n    <ion-label>\n      <h3>Sunday</h3>\n    </ion-label>\n    <ion-text >20C -25C</ion-text>\n  </ion-item>\n</div>\n<div >\n  <ion-item color=\"light\" lines=\"full\">\n     <ion-icon size=\"small\" slot=\"start\" name=\"cloudy-night-outline\"></ion-icon>\n    <ion-label>\n      <h3>Monday</h3>\n    </ion-label>\n    <ion-text >25C -29C</ion-text>\n  </ion-item>\n</div>\n<div >\n  <ion-item color=\"light\" lines=\"full\">\n     <ion-icon size=\"small\" slot=\"start\" name=\"rainy-outline\"></ion-icon>\n\n    <ion-label>\n      <h3>Tuesday</h3>\n    </ion-label>\n    <ion-text >17C -25C</ion-text>\n  </ion-item>\n</div>\n<div >\n  <ion-item color=\"light\" lines=\"full\">\n     <ion-icon size=\"small\" slot=\"start\" name=\"thunderstorm-outline\"></ion-icon>\n\n    <ion-label>\n      <h3>Wednessday</h3>\n    </ion-label>\n    <ion-text >18C -25C</ion-text>\n  </ion-item>\n</div>\n<div>\n  <ion-item color=\"light\" lines=\"full\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"cloudy-outline\"></ion-icon>\n   <ion-label>\n     <h3>Thursday</h3>\n   </ion-label>\n   <ion-text >20C -25C</ion-text>\n </ion-item>\n</div>\n\n<div >\n  <ion-item color=\"light\" lines=\"full\">\n     <ion-icon size=\"small\" slot=\"start\" name=\"rainy-outline\"></ion-icon>\n\n    <ion-label>\n      <h3>Friday</h3>\n    </ion-label>\n    <ion-text >25 -28C</ion-text>\n  </ion-item>\n</div>\n<div >\n  <ion-item color=\"light\" lines=\"full\">\n     <ion-icon size=\"small\" slot=\"start\" name=\"rainy-outline\"></ion-icon>\n\n    <ion-label>\n      <h3>Saturday</h3>\n    </ion-label>\n    <ion-text >17C -25C</ion-text>\n  </ion-item>\n</div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/location/location-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/location/location-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: LocationPageRoutingModule */

  /***/
  function srcAppPagesLocationLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function () {
      return LocationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./location.page */
    "./src/app/pages/location/location.page.ts");

    const routes = [{
      path: '',
      component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }];
    let LocationPageRoutingModule = class LocationPageRoutingModule {};
    LocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LocationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/location/location.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/location/location.module.ts ***!
    \***************************************************/

  /*! exports provided: LocationPageModule */

  /***/
  function srcAppPagesLocationLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
      return LocationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./location-routing.module */
    "./src/app/pages/location/location-routing.module.ts");
    /* harmony import */


    var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./location.page */
    "./src/app/pages/location/location.page.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");

    let LocationPageModule = class LocationPageModule {};
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]],
      declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })], LocationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/location/location.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/location/location.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLocationLocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headingtitle {\n  padding-left: 26%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ndGl0bGV7XG4gICAgcGFkZGluZy1sZWZ0OiAyNiU7XG59IiwiLmhlYWRpbmd0aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjYlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/location/location.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/location/location.page.ts ***!
    \*************************************************/

  /*! exports provided: LocationPage */

  /***/
  function srcAppPagesLocationLocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
      return LocationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let LocationPage = class LocationPage {
      constructor(navController) {
        this.navController = navController;
      }

      ngOnInit() {}

      weatherupdate() {
        this.navController.navigateForward('weather-updates');
      }

    };

    LocationPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./location.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./location.page.scss */
      "./src/app/pages/location/location.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], LocationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-location-location-module-es5.js.map