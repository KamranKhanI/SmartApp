(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weather-updates-weather-updates-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weather-updates/weather-updates.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weather-updates/weather-updates.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWeatherUpdatesWeatherUpdatesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"headingtitle\">Header</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content>\n  <i class=\"material-icons\" >\n    wb_sunny\n    </i>\n\n    <div  class=\"locationtext\">\n      <p>Satellite Town Plost 551 C</p>\n    </div>\n\n  <div  style=\"width:95vw ;padding-top:20px\">\n\n  \n    <mat-form-field  style=\"width:95vw \" class=\"paddingselect mat-select-panel-wrap\">\n      <mat-select placeholder=\"Temprature \" style=\"border-bottom: none;\" >\n        <mat-option *ngFor=\"let temp of temperature\" [value]=\"temp.value\">\n          {{temp.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n    <mat-form-field  style=\"width:95vw \" class=\"paddingselect mat-select-panel-wrap\">\n      <mat-select placeholder=\"Outdoor Humidity \" >\n        <mat-option *ngFor=\"let hum of humidity\" [value]=\"hum.value\">\n          {{hum.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field  style=\"width:95vw\" class=\"paddingselect mat-select-panel-wrap\">\n      <mat-select placeholder=\"Outdoor Air Pressure \" >\n        <mat-option *ngFor=\"let pre of pressure\" [value]=\"pre.value\">\n          {{pre.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field  style=\"width:95vw \" class=\"paddingselect mat-select-panel-wrap\">\n      <mat-select placeholder=\"Outdoor Wind Speed \" >\n        <mat-option *ngFor=\"let spe of speed\" [value]=\"spe.value\">\n          {{spe.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    \n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/weather-updates/weather-updates-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/weather-updates/weather-updates-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: WeatherUpdatesPageRoutingModule */

  /***/
  function srcAppPagesWeatherUpdatesWeatherUpdatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherUpdatesPageRoutingModule", function () {
      return WeatherUpdatesPageRoutingModule;
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


    var _weather_updates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./weather-updates.page */
    "./src/app/pages/weather-updates/weather-updates.page.ts");

    const routes = [{
      path: '',
      component: _weather_updates_page__WEBPACK_IMPORTED_MODULE_3__["WeatherUpdatesPage"]
    }];
    let WeatherUpdatesPageRoutingModule = class WeatherUpdatesPageRoutingModule {};
    WeatherUpdatesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WeatherUpdatesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/weather-updates/weather-updates.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/weather-updates/weather-updates.module.ts ***!
    \*****************************************************************/

  /*! exports provided: WeatherUpdatesPageModule */

  /***/
  function srcAppPagesWeatherUpdatesWeatherUpdatesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherUpdatesPageModule", function () {
      return WeatherUpdatesPageModule;
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


    var _weather_updates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./weather-updates-routing.module */
    "./src/app/pages/weather-updates/weather-updates-routing.module.ts");
    /* harmony import */


    var _weather_updates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./weather-updates.page */
    "./src/app/pages/weather-updates/weather-updates.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    let WeatherUpdatesPageModule = class WeatherUpdatesPageModule {};
    WeatherUpdatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _weather_updates_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeatherUpdatesPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__["MatPaginatorModule"]],
      declarations: [_weather_updates_page__WEBPACK_IMPORTED_MODULE_6__["WeatherUpdatesPage"]]
    })], WeatherUpdatesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/weather-updates/weather-updates.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/weather-updates/weather-updates.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWeatherUpdatesWeatherUpdatesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".material-icons {\n  font-size: 71px;\n  padding-left: 21vh;\n  padding-top: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  color: #ffe600;\n  -webkit-font-smoothing: antialiased;\n}\n\n.locationtext {\n  padding-left: 13vh;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  height: 0px;\n}\n\n.paddingselect {\n  padding-left: 4vh;\n}\n\n.mat-select-panel-wrap {\n  flex-basis: 60%;\n}\n\n.headingtitle {\n  padding-left: 26%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL3BhZ2VzL3dlYXRoZXItdXBkYXRlcy93ZWF0aGVyLXVwZGF0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93ZWF0aGVyLXVwZGF0ZXMvd2VhdGhlci11cGRhdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLG1DQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURRQTtFQUNJLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWF0aGVyLXVwZGF0ZXMvd2VhdGhlci11cGRhdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29ucyB7XG4gICAgXG4gICAgZm9udC1zaXplOiA3MXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjF2aDtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyMzAsIDApO1xuICAgIFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4ubG9jYXRpb250ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzdmg7XG59XG5cblxuXG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBoZWlnaHQ6IDBweDtcbn1cblxuLnBhZGRpbmdzZWxlY3Qge1xuICAgIHBhZGRpbmctbGVmdDogNHZoO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbC13cmFwIHtcbiAgICBmbGV4LWJhc2lzOiA2MCU7XG59XG5cblxuLmhlYWRpbmd0aXRsZXtcbiAgICBwYWRkaW5nLWxlZnQ6IDI2JTtcbn0iLCIubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDcxcHg7XG4gIHBhZGRpbmctbGVmdDogMjF2aDtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGNvbG9yOiAjZmZlNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLmxvY2F0aW9udGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTN2aDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBoZWlnaHQ6IDBweDtcbn1cblxuLnBhZGRpbmdzZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDR2aDtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwtd3JhcCB7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbn1cblxuLmhlYWRpbmd0aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjYlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/weather-updates/weather-updates.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/weather-updates/weather-updates.page.ts ***!
    \***************************************************************/

  /*! exports provided: WeatherUpdatesPage */

  /***/
  function srcAppPagesWeatherUpdatesWeatherUpdatesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherUpdatesPage", function () {
      return WeatherUpdatesPage;
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

    let WeatherUpdatesPage = class WeatherUpdatesPage {
      constructor(navController) {
        this.navController = navController;
        this.temperature = [{
          value: 'C',
          viewValue: 'C'
        }, {
          value: 'C',
          viewValue: 'F'
        }];
        this.humidity = [{
          value: '%',
          viewValue: '%'
        }];
        this.pressure = [{
          value: 'inHg',
          viewValue: 'inHg'
        }, {
          value: 'mb',
          viewValue: 'mb'
        }, {
          value: 'hPa',
          viewValue: 'hPa'
        }, {
          value: 'mmHg',
          viewValue: 'mmHg'
        }];
        this.speed = [{
          value: 'ms',
          viewValue: 'm/s'
        }, {
          value: 'kph',
          viewValue: 'kph'
        }, {
          value: 'mph',
          viewValue: 'mph'
        }, {
          value: 'kmh',
          viewValue: 'km/h'
        }];
      }

      ngOnInit() {}

    };

    WeatherUpdatesPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    WeatherUpdatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-weather-updates',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./weather-updates.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weather-updates/weather-updates.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./weather-updates.page.scss */
      "./src/app/pages/weather-updates/weather-updates.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], WeatherUpdatesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-weather-updates-weather-updates-module-es5.js.map