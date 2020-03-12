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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n<ion-row class=\"headerRow\">\n  <ion-col size=\"5\"  > \n    <ion-icon routerLink=\"/home\" routerDirection=\"root\" style=\" padding-left: 2vh;   padding-top: 3px;\" class=\"fontsize\" name=\"chevron-back-outline\"></ion-icon>\n  </ion-col>\n  <ion-col size=\"5\">Globe</ion-col>\n  <ion-col size=\"2\">\n    <ion-icon  class=\"fontsize\" style=\"padding-left: 2vh;\" name=\"ellipsis-horizontal-outline\" (click)=\"weatherupdate()\"></ion-icon>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n</ion-content>\n";
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

    let LocationPageModule = class LocationPageModule {};
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]],
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


    __webpack_exports__["default"] = ".headerRow {\n  padding-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJSb3d7XG4gICAgcGFkZGluZy10b3A6IDJ2aDtcbn0iLCIuaGVhZGVyUm93IHtcbiAgcGFkZGluZy10b3A6IDJ2aDtcbn0iXX0= */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LocationPage = class LocationPage {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

      weatherupdate() {
        this.router.navigate(['weather-updates']);
      }

    };

    LocationPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./location.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./location.page.scss */
      "./src/app/pages/location/location.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LocationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-location-location-module-es5.js.map