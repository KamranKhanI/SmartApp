(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"headingtitle\">Messages</ion-title>\n    <ion-icon slot=\"end\" name=\"settings\" (click)=\"gotoNotificationSetting()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n   \n    <mat-tab label=\"First\"> \n       <ng-template mat-tab-label>\n        <ion-icon name=\"home\"></ion-icon>\n     </ng-template> \n     <div>\n     fasdfewvd\n    </div>\n</mat-tab>\n  \n    <mat-tab label=\"Second\"> \n      <ng-template mat-tab-label>\n        <ion-icon name=\"volume-high-sharp\"></ion-icon>\n     </ng-template> \n\n\n     <div>\n      dasdfasdfasdfasdfasdfasd\n    </div>\n       </mat-tab>\n      \n  <mat-tab label=\"Third\"> \n    <ng-template mat-tab-label>\n      <ion-icon name=\"time\" ></ion-icon>\n   </ng-template> \n\n   <div class=\"example-container\">\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Input</mat-label>\n      <input matInput>\n    </mat-form-field>\n    <br>\n   \n    \n    <mat-form-field appearance=\"fill\">\n      <mat-label>Textarea</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </div>\n  \n  </mat-tab>\n  </mat-tab-group>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/messages/messages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/messages/messages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function() { return MessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/messages/messages.page.ts");




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/messages/messages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.module.ts ***!
  \***************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/pages/messages/messages-routing.module.ts");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/messages/messages.page.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");










let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "./src/app/pages/messages/messages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerRow {\n  padding-top: 2vh;\n}\n\n.mat-tab-group {\n  margin-bottom: 48px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n.example-stretched-tabs {\n  max-width: 800px;\n}\n\n.headingtitle {\n  padding-left: 26%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL3BhZ2VzL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDSSxlQUFBO0FDRU47O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBREdFO0VBQ0UsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJSb3d7XG4gICAgcGFkZGluZy10b3A6IDJ2aDtcbn1cblxuLm1hdC10YWItZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIH1cbiAgaW9uLWljb257XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuZXhhbXBsZS1zdHJldGNoZWQtdGFicyB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuXG5cblxuICAuaGVhZGluZ3RpdGxle1xuICAgIHBhZGRpbmctbGVmdDogMjYlO1xufSIsIi5oZWFkZXJSb3cge1xuICBwYWRkaW5nLXRvcDogMnZoO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZXhhbXBsZS1zdHJldGNoZWQtdGFicyB7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5oZWFkaW5ndGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDI2JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/messages/messages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/messages/messages.page.ts ***!
  \*************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let MessagesPage = class MessagesPage {
    constructor(navControl) {
        this.navControl = navControl;
    }
    ngOnInit() {
    }
    gotoNotificationSetting() {
        this.navControl.navigateForward('notification-settings');
    }
};
MessagesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/messages/messages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], MessagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module-es2015.js.map