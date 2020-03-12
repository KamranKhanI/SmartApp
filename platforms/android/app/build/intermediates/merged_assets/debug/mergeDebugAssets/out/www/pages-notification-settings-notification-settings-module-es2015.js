(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-settings-notification-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification-settings/notification-settings.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification-settings/notification-settings.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n<ion-row class=\"headerRow\">\n  <ion-col size=\"3\"  > \n    <ion-icon routerLink=\"/messages\" routerDirection=\"root\" style=\" padding-left: 2vh;   padding-top: 3px;\" class=\"fontsize\" name=\"chevron-back-outline\"></ion-icon>\n  </ion-col>\n  <ion-col size=\"5\">Notification Settings</ion-col>\n  \n</ion-row>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-list style=\"padding-bottom: 20px;\">\n  <ion-item>\n    <ion-label>Enable Notification</ion-label>\n    <ion-toggle ></ion-toggle>\n  </ion-item>\n</ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"home-sharp\" class=\"icon-padding\"></ion-icon>\n      <ion-label>Home</ion-label>\n      <ion-toggle ></ion-toggle>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name=\"volume-high-sharp\" class=\"icon-padding\"></ion-icon>\n      <ion-label>System</ion-label>\n      <ion-toggle ></ion-toggle>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name=\"time\" class=\"icon-padding\" ></ion-icon >\n      <ion-label>Events</ion-label>\n      <ion-toggle ></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/notification-settings/notification-settings-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: NotificationSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingsPageRoutingModule", function() { return NotificationSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-settings.page */ "./src/app/pages/notification-settings/notification-settings.page.ts");




const routes = [
    {
        path: '',
        component: _notification_settings_page__WEBPACK_IMPORTED_MODULE_3__["NotificationSettingsPage"]
    }
];
let NotificationSettingsPageRoutingModule = class NotificationSettingsPageRoutingModule {
};
NotificationSettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationSettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/notification-settings/notification-settings.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingsPageModule", function() { return NotificationSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-settings-routing.module */ "./src/app/pages/notification-settings/notification-settings-routing.module.ts");
/* harmony import */ var _notification_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-settings.page */ "./src/app/pages/notification-settings/notification-settings.page.ts");







let NotificationSettingsPageModule = class NotificationSettingsPageModule {
};
NotificationSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationSettingsPageRoutingModule"]
        ],
        declarations: [_notification_settings_page__WEBPACK_IMPORTED_MODULE_6__["NotificationSettingsPage"]]
    })
], NotificationSettingsPageModule);



/***/ }),

/***/ "./src/app/pages/notification-settings/notification-settings.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-padding {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi1zZXR0aW5ncy9ub3RpZmljYXRpb24tc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24tc2V0dGluZ3Mvbm90aWZpY2F0aW9uLXNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24tc2V0dGluZ3Mvbm90aWZpY2F0aW9uLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXBhZGRpbmd7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4IDtcbn0iLCIuaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/notification-settings/notification-settings.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.page.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingsPage", function() { return NotificationSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationSettingsPage = class NotificationSettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificationSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification-settings/notification-settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-settings.page.scss */ "./src/app/pages/notification-settings/notification-settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationSettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-notification-settings-notification-settings-module-es2015.js.map