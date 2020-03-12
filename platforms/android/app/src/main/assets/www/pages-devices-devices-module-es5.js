(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-devices-devices-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/devices/devices.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/devices/devices.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDevicesDevicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n<ion-row class=\"margin-rop:1vh\">\n  <ion-col size=\"3\" style=\"padding-top: 30px;\"(click)=\"locationpage()\"> \n    <ion-icon class=\"iconsize\" name=\"location-outline\"></ion-icon>\n  </ion-col>\n  <ion-col  style=\"padding-left: 15px;\" size=\"6\"><h4>Smart Home</h4></ion-col>\n  <ion-col size=\"3\" style=\" padding-left: 25px;\">\n    <ion-icon class=\"iconsize\" style=\"padding-top: 20px;\" name=\"mic-outline\"></ion-icon>\n    <i class=\"material-icons\">add_circle_outline </i>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-row class=\"headerRow\">\n    <ion-col size=\"5\">\n     \n      <div class=\"popover__wrapper1\">\n        Test Home1\n        <ion-icon name=\"caret-down-outline\"></ion-icon>\n      <div class=\"popover__content1\">\n        <ion-list  lines=\"none\">\n\n          <ion-item>\n            Test Home 1\n            <ion-icon name=\"disc-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name=\"options-outline\"></ion-icon>\n            <ion-label style=\"padding-left: 10px;\">Home Management</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        \n          </ion-list>\n      </div>\n    </div>\n    </ion-col>\n    <ion-col size=\"5\">\n     \n    </ion-col>\n    <ion-col size=\"2\">\n      <div class=\"popover__wrapper\">\n      \n        <i class=\"iconsize popover__title\" style=\"padding-left: 2vh;\" class=\"material-icons\" (click)=\"openGL_view()\" >more_horiz</i> \n      \n      <div class=\"popover__content\">\n        <ion-list  lines=\"none\">\n          <ion-item>\n            <ion-icon name=\"grid-outline\"></ion-icon>\n            <ion-label style=\"padding-left: 10px;\">Grid View</ion-label>\n            \n          </ion-item>\n        \n          <ion-item>\n            <ion-icon name=\"list-outline\"></ion-icon>\n            <ion-label style=\"padding-left: 10px;\">List View</ion-label>\n            \n          </ion-item>\n          </ion-list>\n\n      </div>\n    </div>\n    </ion-col>\n  </ion-row>\n\n\n<ion-row>\n  <ion-col >\n\n    \n  </ion-col>\n</ion-row>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/devices/devices-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/devices/devices-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: DevicesPageRoutingModule */

  /***/
  function srcAppPagesDevicesDevicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicesPageRoutingModule", function () {
      return DevicesPageRoutingModule;
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


    var _devices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./devices.page */
    "./src/app/pages/devices/devices.page.ts");

    const routes = [{
      path: '',
      component: _devices_page__WEBPACK_IMPORTED_MODULE_3__["DevicesPage"]
    }];
    let DevicesPageRoutingModule = class DevicesPageRoutingModule {};
    DevicesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DevicesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/devices/devices.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/devices/devices.module.ts ***!
    \*************************************************/

  /*! exports provided: DevicesPageModule */

  /***/
  function srcAppPagesDevicesDevicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicesPageModule", function () {
      return DevicesPageModule;
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


    var _devices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./devices-routing.module */
    "./src/app/pages/devices/devices-routing.module.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _devices_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./devices.page */
    "./src/app/pages/devices/devices.page.ts");

    let DevicesPageModule = class DevicesPageModule {};
    DevicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _devices_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevicesPageRoutingModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]],
      declarations: [_devices_page__WEBPACK_IMPORTED_MODULE_7__["DevicesPage"]]
    })], DevicesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/devices/devices.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/devices/devices.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDevicesDevicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.fontsize {\n  font-size: 25px;\n}\n.headerRow {\n  padding-top: 1vh;\n}\n.borders {\n  border-top: 1px solid #aaaaaa;\n}\n.iconsize {\n  font-size: 25px;\n}\n.header-md:after {\n  left: 0;\n  bottom: -5px;\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMV…h/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n.mat-form-field-infix {\n  display: block;\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: auto;\n  min-width: 0;\n  width: 0px;\n}\n.mat-select-arrow {\n  border: none;\n}\n.mat-select-trigger {\n  display: none;\n  cursor: none;\n  position: non;\n  /* box-sizing: border-box; */\n}\n.mat-select {\n  display: none;\n  width: 0%;\n  outline: 0;\n}\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  height: 0px;\n}\n/* Popover styling */\na {\n  text-decoration: none;\n}\n.popover__wrapper {\n  position: relative;\n  margin-top: 0.5rem;\n  display: inline-block;\n}\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -100px;\n  -webkit-transform: translate(0, 10px);\n          transform: translate(0, 10px);\n  background-color: #fffdfd;\n  padding: 0px;\n  box-shadow: 0 6px 5px 0 rgba(39, 38, 38, 0.26);\n  width: auto;\n}\n.popover__content:before {\n  position: absolute;\n  z-index: -1;\n  content: \"\";\n  right: calc(50% - 10px);\n  top: -100px;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #d5d2e4 transparent;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.popover__wrapper:hover .popover__content {\n  z-index: 10;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: translate(0, -20px);\n          transform: translate(0, -20px);\n  -webkit-transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n.popover__message {\n  text-align: center;\n}\n.popover__wrapper1 {\n  position: relative;\n  margin-top: 0.5rem;\n  display: inline-block;\n}\n.popover__content1 {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: 0.5rem;\n  top: 3rem;\n  -webkit-transform: translate(0, 10px);\n          transform: translate(0, 10px);\n  background-color: #fffdfd;\n  padding: 0px;\n  box-shadow: 0 6px 5px 0 rgba(39, 38, 38, 0.26);\n  width: auto;\n}\n.popover__content:before1 {\n  position: absolute;\n  z-index: -1;\n  content: \"\";\n  right: calc(50% - 10px);\n  top: -100px;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #d5d2e4 transparent;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.popover__wrapper1:hover .popover__content1 {\n  z-index: 10;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: translate(0, -20px);\n          transform: translate(0, -20px);\n  -webkit-transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n.popover__message1 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV2aWNlcy9kZXZpY2VzLnBhZ2Uuc2NzcyIsIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL3BhZ2VzL2RldmljZXMvZGV2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZUFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtBREVKO0FDQ0E7RUFFSSw2QkFBQTtBRENKO0FDSUE7RUFDSSxlQUFBO0FEREo7QUNNQTtFQUNJLE9BQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZLQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FESko7QUNRQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO1VBQUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FETEo7QUNPQTtFQUNJLFlBQUE7QURKSjtBQ01FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QURISjtBQ0tBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDRCxVQUFBO0FERkg7QUNLQTtFQUNJLFdBQUE7QURGSjtBQ1FFLG9CQUFBO0FBRUE7RUFDRSxxQkFBQTtBRE5KO0FDV0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QURSSjtBQ1VFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtBRFBKO0FDU0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDhDQUFBO0VBQUEsc0NBQUE7RUFBQSw4QkFBQTtFQUFBLGlEQUFBO0FETko7QUNRRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsaUVBQUE7RUFBQSx5REFBQTtBRExKO0FDT0U7RUFDRSxrQkFBQTtBREpKO0FDU0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUROSjtBQ1FFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7QURMSjtBQ09FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw4Q0FBQTtFQUFBLHNDQUFBO0VBQUEsOEJBQUE7RUFBQSxpREFBQTtBREpKO0FDTUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLGlFQUFBO0VBQUEseURBQUE7QURISjtBQ0tFO0VBQ0Usa0JBQUE7QURGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmljZXMvZGV2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZm9udHNpemUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5oZWFkZXJSb3cge1xuICBwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uYm9yZGVycyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhYWFhO1xufVxuXG4uaWNvbnNpemUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IC01cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1W4oCmaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IGF1dG87XG4gIG1pbi13aWR0aDogMDtcbiAgd2lkdGg6IDBweDtcbn1cblxuLm1hdC1zZWxlY3QtYXJyb3cge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IG5vbmU7XG4gIHBvc2l0aW9uOiBub247XG4gIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXG59XG5cbi5tYXQtc2VsZWN0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDAlO1xuICBvdXRsaW5lOiAwO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGhlaWdodDogMHB4O1xufVxuXG4vKiBQb3BvdmVyIHN0eWxpbmcgKi9cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wb3BvdmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZDtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAwIDZweCA1cHggMCByZ2JhKDM5LCAzOCwgMzgsIDAuMjYpO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgY29udGVudDogXCJcIjtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTBweCk7XG4gIHRvcDogLTEwMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2Q1ZDJlNCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XG4gIHotaW5kZXg6IDEwO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcbn1cblxuLnBvcG92ZXJfX21lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3BvdmVyX193cmFwcGVyMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3BvdmVyX19jb250ZW50MSB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwLjVyZW07XG4gIHRvcDogM3JlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZmQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNoYWRvdzogMCA2cHggNXB4IDAgcmdiYSgzOSwgMzgsIDM4LCAwLjI2KTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBjb250ZW50OiBcIlwiO1xuICByaWdodDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgdG9wOiAtMTAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZDVkMmU0IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG5cbi5wb3BvdmVyX193cmFwcGVyMTpob3ZlciAucG9wb3Zlcl9fY29udGVudDEge1xuICB6LWluZGV4OiAxMDtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XG59XG5cbi5wb3BvdmVyX19tZXNzYWdlMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuZm9udHNpemV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyUm93e1xuICAgIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5ib3JkZXJze1xuICBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYWFhYTtcbiAgIFxufVxuXG5cbi5pY29uc2l6ZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cblxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1W4oCmaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBjb250ZW50OiBcIlwiO1xufVxuXG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAwcHg7XG59XG4ubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgYm9yZGVyOm5vbmVcbiAgfVxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbiAgICBwb3NpdGlvbjogbm9uO1xuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXG59XG4ubWF0LXNlbGVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMCU7XG4gICBvdXRsaW5lOiAwO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgaGVpZ2h0OiAwcHg7XG59XG5cblxuXG4gIFxuICAvKiBQb3BvdmVyIHN0eWxpbmcgKi9cbiAgXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgXG4gIFxuICAucG9wb3Zlcl9fd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnBvcG92ZXJfX2NvbnRlbnQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA2cHggNXB4IDAgcmdiYSgzOSwgMzgsIDM4LCAwLjI2KTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgIHRvcDogLTEwMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2Q1ZDJlNCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgfVxuICAucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XG4gIH1cbiAgLnBvcG92ZXJfX21lc3NhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcblxuICAvLy8vLy8vLy8vLy8vQGV4dGVuZFxuICAucG9wb3Zlcl9fd3JhcHBlcjEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5wb3BvdmVyX19jb250ZW50MSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDAuNXJlbTtcbiAgICB0b3A6IDNyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA2cHggNXB4IDAgcmdiYSgzOSwgMzgsIDM4LCAwLjI2KTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucG9wb3Zlcl9fY29udGVudDpiZWZvcmUxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgY29udGVudDogXCJcIjtcbiAgICByaWdodDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICB0b3A6IC0xMDBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNkNWQyZTQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIH1cbiAgLnBvcG92ZXJfX3dyYXBwZXIxOmhvdmVyIC5wb3BvdmVyX19jb250ZW50MSB7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XG4gIH1cbiAgLnBvcG92ZXJfX21lc3NhZ2UxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/devices/devices.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/devices/devices.page.ts ***!
    \***********************************************/

  /*! exports provided: DevicesPage */

  /***/
  function srcAppPagesDevicesDevicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicesPage", function () {
      return DevicesPage;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let DevicesPage = class DevicesPage {
      constructor(rounter, popoverController) {
        this.rounter = rounter;
        this.popoverController = popoverController;
      }

      ngOnInit() {}

      locationpage() {
        console.log("working from location");
        this.rounter.navigate(['location']);
      }

    };

    DevicesPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }];

    DevicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-devices',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./devices.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/devices/devices.page.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None // *** This line disables the view encapsulation
      ,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./devices.page.scss */
      "./src/app/pages/devices/devices.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], DevicesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-devices-devices-module-es5.js.map