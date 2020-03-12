(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n\n\n\n\n    <ion-tabs >\n      <ion-tab-bar slot=\"bottom\" class=\"borders\">\n        <ion-tab-button tab=\"tab1\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>Devices</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"tab2\">\n          <ion-icon name=\"apps\"></ion-icon>\n          <ion-label>Rooms</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"tab3\" >\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>Me</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    const routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
      children: [{
        path: 'tab3',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
        }]
      }, {
        path: 'tab2',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | pages-rooms-rooms-module */
          "pages-rooms-rooms-module").then(__webpack_require__.bind(null,
          /*! ../pages/rooms/rooms.module */
          "./src/app/pages/rooms/rooms.module.ts")).then(m => m.RoomsPageModule)
        }]
      }, {
        path: 'tab1',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | pages-devices-devices-module */
          "pages-devices-devices-module").then(__webpack_require__.bind(null,
          /*! ../pages/devices/devices.module */
          "./src/app/pages/devices/devices.module.ts")).then(m => m.DevicesPageModule)
        }]
      }, {
        path: '',
        redirectTo: '/home/tab1',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/home/tab1',
      pathMatch: 'full'
    }];
    let HomePageRoutingModule = class HomePageRoutingModule {};
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_36__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_35__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.headerRow {\n  padding-top: 1vh;\n}\n.borders {\n  border-top: 1px solid #aaaaaa;\n}\n.iconsize {\n  font-size: 25px;\n}\n.header-md:after {\n  left: 0;\n  bottom: -5px;\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMV…h/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksZ0JBQUE7QURDSjtBQ0VBO0VBRUksNkJBQUE7QURBSjtBQ0tBO0VBQ0ksZUFBQTtBREZKO0FDT0E7RUFDSSxPQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2S0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBRExKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5oZWFkZXJSb3cge1xuICBwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uYm9yZGVycyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhYWFhO1xufVxuXG4uaWNvbnNpemUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IC01cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1W4oCmaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59IiwiXG4uaGVhZGVyUm93e1xuICAgIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5ib3JkZXJze1xuICBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYWFhYTtcbiAgIFxufVxuXG5cbi5pY29uc2l6ZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cblxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1W4oCmaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBjb250ZW50OiBcIlwiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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

    let HomePage = class HomePage {
      constructor(rounter) {
        this.rounter = rounter;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
      }

      ngOnInit() {}

      locationpage() {
        console.log("working from location");
        this.rounter.navigate(['location']);
      }

      gotoProfile() {
        this.rounter.navigate(['profile']);
      }

    };

    HomePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map