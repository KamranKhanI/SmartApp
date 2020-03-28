(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rooms-rooms-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rooms/rooms.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rooms/rooms.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRoomsRoomsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-header>\n  <ion-toolbar>\n    <ion-icon style=\"margin-left: 10px;\" slot=\"start\" class=\"iconsize\" name=\"location-outline\" (click)=\"locationpage()\"></ion-icon>\n    <ion-title style=\"margin-left: 21%\">Smart Home</ion-title>\n    <ion-icon class=\"iconsize\" slot=\"end\" name=\"mic-outline\"></ion-icon>\n    <ion-icon style=\"margin-right: 10px;\" class=\"iconsize\" slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- Item Full Lines -->\n<ion-item lines=\"full\">\n  <ion-label>Item Lines Full</ion-label>\n</ion-item>\n\n<!-- Item None Lines -->\n<ion-item lines=\"none\">\n  <ion-label>Item Lines None</ion-label>\n</ion-item>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/rooms/rooms-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/rooms/rooms-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RoomsPageRoutingModule */

  /***/
  function srcAppPagesRoomsRoomsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomsPageRoutingModule", function () {
      return RoomsPageRoutingModule;
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


    var _rooms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rooms.page */
    "./src/app/pages/rooms/rooms.page.ts");

    const routes = [{
      path: '',
      component: _rooms_page__WEBPACK_IMPORTED_MODULE_3__["RoomsPage"]
    }];
    let RoomsPageRoutingModule = class RoomsPageRoutingModule {};
    RoomsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RoomsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/rooms/rooms.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/rooms/rooms.module.ts ***!
    \*********************************************/

  /*! exports provided: RoomsPageModule */

  /***/
  function srcAppPagesRoomsRoomsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomsPageModule", function () {
      return RoomsPageModule;
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


    var _rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rooms-routing.module */
    "./src/app/pages/rooms/rooms-routing.module.ts");
    /* harmony import */


    var _rooms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rooms.page */
    "./src/app/pages/rooms/rooms.page.ts");

    let RoomsPageModule = class RoomsPageModule {};
    RoomsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoomsPageRoutingModule"]],
      declarations: [_rooms_page__WEBPACK_IMPORTED_MODULE_6__["RoomsPage"]]
    })], RoomsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/rooms/rooms.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/rooms/rooms.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRoomsRoomsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.fontsize {\n  font-size: 25px;\n}\n.headerRow {\n  padding-top: 1vh;\n}\n.borders {\n  border-top: 1px solid #aaaaaa;\n}\n.iconsize {\n  font-size: 25px;\n}\n.header-md:after {\n  left: 0;\n  bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMV…h/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcm9vbXMvcm9vbXMucGFnZS5zY3NzIiwiL2hvbWUvZGFudmkvRG93bmxvYWRzL2lvNS9TbWFydEFwL3NyYy9hcHAvcGFnZXMvcm9vbXMvcm9vbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7QURFSjtBQ0NBO0VBQ0ksZ0JBQUE7QURFSjtBQ0NBO0VBRUksNkJBQUE7QURDSjtBQ0lBO0VBQ0ksZUFBQTtBRERKO0FDTUE7RUFDSSxPQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2S0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBREpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcm9vbXMvcm9vbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvbnRzaXplIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyUm93IHtcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cblxuLmJvcmRlcnMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYWFhYTtcbn1cblxuLmljb25zaXplIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1W4oCmaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59IiwiLmZvbnRzaXple1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmhlYWRlclJvd3tcbiAgICBwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uYm9yZGVyc3tcbiAgXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWFhYWE7XG4gICBcbn1cblxuXG4uaWNvbnNpemV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5cblxuLmhlYWRlci1tZDphZnRlciB7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDBweDtcbiAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1W4oCmaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBjb250ZW50OiBcIlwiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/rooms/rooms.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/rooms/rooms.page.ts ***!
    \*******************************************/

  /*! exports provided: RoomsPage */

  /***/
  function srcAppPagesRoomsRoomsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomsPage", function () {
      return RoomsPage;
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

    let RoomsPage = class RoomsPage {
      constructor(rounter) {
        this.rounter = rounter;
      }

      ngOnInit() {}

      locationpage() {
        console.log("working from location");
        this.rounter.navigate(['location']);
      }

    };

    RoomsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    RoomsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rooms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rooms.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rooms/rooms.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rooms.page.scss */
      "./src/app/pages/rooms/rooms.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RoomsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-rooms-rooms-module-es5.js.map