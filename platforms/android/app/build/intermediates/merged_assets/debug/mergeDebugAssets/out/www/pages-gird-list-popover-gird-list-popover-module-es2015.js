(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gird-list-popover-gird-list-popover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gird-list-popover/gird-list-popover.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gird-list-popover/gird-list-popover.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    gsdf\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/gird-list-popover/gird-list-popover-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/gird-list-popover/gird-list-popover-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GirdListPopoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirdListPopoverPageRoutingModule", function() { return GirdListPopoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gird_list_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gird-list-popover.page */ "./src/app/pages/gird-list-popover/gird-list-popover.page.ts");




const routes = [
    {
        path: '',
        component: _gird_list_popover_page__WEBPACK_IMPORTED_MODULE_3__["GirdListPopoverPage"]
    }
];
let GirdListPopoverPageRoutingModule = class GirdListPopoverPageRoutingModule {
};
GirdListPopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GirdListPopoverPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gird-list-popover/gird-list-popover.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/gird-list-popover/gird-list-popover.module.ts ***!
  \*********************************************************************/
/*! exports provided: GirdListPopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirdListPopoverPageModule", function() { return GirdListPopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _gird_list_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gird-list-popover-routing.module */ "./src/app/pages/gird-list-popover/gird-list-popover-routing.module.ts");
/* harmony import */ var _gird_list_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gird-list-popover.page */ "./src/app/pages/gird-list-popover/gird-list-popover.page.ts");







let GirdListPopoverPageModule = class GirdListPopoverPageModule {
};
GirdListPopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gird_list_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["GirdListPopoverPageRoutingModule"]
        ],
        declarations: [_gird_list_popover_page__WEBPACK_IMPORTED_MODULE_6__["GirdListPopoverPage"]]
    })
], GirdListPopoverPageModule);



/***/ }),

/***/ "./src/app/pages/gird-list-popover/gird-list-popover.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/gird-list-popover/gird-list-popover.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dpcmQtbGlzdC1wb3BvdmVyL2dpcmQtbGlzdC1wb3BvdmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/gird-list-popover/gird-list-popover.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/gird-list-popover/gird-list-popover.page.ts ***!
  \*******************************************************************/
/*! exports provided: GirdListPopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirdListPopoverPage", function() { return GirdListPopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GirdListPopoverPage = class GirdListPopoverPage {
    constructor() { }
    ngOnInit() {
    }
};
GirdListPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gird-list-popover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gird-list-popover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gird-list-popover/gird-list-popover.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gird-list-popover.page.scss */ "./src/app/pages/gird-list-popover/gird-list-popover.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GirdListPopoverPage);



/***/ })

}]);
//# sourceMappingURL=pages-gird-list-popover-gird-list-popover-module-es2015.js.map