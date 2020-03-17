(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    \n    <ion-row class=\"top-header-bg\" >\n      <!-- <ion-col class=\"left-icon iconstyle\" size=\"4\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-col> -->\n      <ion-col class=\"top-heading\" >\n        <h3>My profile</h3>\n      </ion-col>\n      <!-- <ion-col class=\"right-icon iconstyle\" size=\"4\">\n        <ion-icon name=\"create-outline\"></ion-icon> \n      </ion-col> -->\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item  lines=\"none\">\n    <ion-avatar class=\"avatar\" slot=\"start\" >\n      <img class=\"avatar-img\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n    </ion-avatar>\n    \n      <h4 class=\"avatar-wrapper-top-heading\">Tap To Enter Name</h4>\n      <span class=\"avatar-wrapper-bottom-heading\">Zee@gmail.com</span>\n    \n  </ion-item>\n  <ion-item class=\"second-wrapper\" (click)=\"gotoAddHome()\" lines=\"none\">\n    \n    <ion-icon name=\"home\"></ion-icon>\n    <h4 class=\"second-wrapper-heading\">Home Management</h4>\n  </ion-item>\n  <ion-list>\n    <ion-item lines=\"none\" (click)=\"gotoMessages()\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n      <h4 class=\"third-wrapper-heading\">Message Center</h4>\n    </ion-item>\n    \n    <ion-item lines=\"none\">\n      <ion-icon name=\"book-outline\"></ion-icon>\n      <h4 class=\"third-wrapper-second-heading\">FAQ & FeedBack</h4>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"bookmark-outline\"></ion-icon>\n      <h4 class=\"third-wrapper-third-heading\">More Services</h4>\n    </ion-item>\n  </ion-list>\n<ion-list class=\"forth-heading\">\n    <ion-item lines=\"none\">\n      <ion-icon name=\"radio-outline\"></ion-icon>\n      <h4 class=\"forth-wrapper-heading\">Configure Wi-Fi</h4>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"settings-outline\"></ion-icon>\n      <h4 class=\"forth-wrapper-first-heading\">Settings</h4>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    const routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];
    let ProfilePageRoutingModule = class ProfilePageRoutingModule {};
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    let ProfilePageModule = class ProfilePageModule {};
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.top-header-bg {\n  background-color: white;\n}\n\n.container-top-heading {\n  padding-top: 25px;\n  text-align: center;\n}\n\n.top-heading {\n  font-size: x-large;\n  text-align: center;\n  height: 60px;\n  color: black;\n}\n\n.avatar {\n  margin-bottom: 50px;\n}\n\n.avatar-img {\n  height: 85px;\n  width: 85px;\n  max-width: none;\n}\n\n.avatar-wrapper-top-heading {\n  position: relative;\n  padding-top: 25px;\n  height: 100px;\n  padding-left: 50px;\n  max-width: none;\n}\n\n.avatar-wrapper-bottom-heading {\n  position: absolute;\n  padding-top: 40px;\n  padding-left: 50px;\n  font-size: 15px;\n}\n\n.second-wrapper {\n  padding-top: 15px;\n  padding-bottom: 20px;\n}\n\n.second-wrapper-heading {\n  padding-left: 30px;\n  font-size: 15px;\n}\n\n.third-wrapper-heading {\n  font-size: 15px;\n  padding-left: 30px;\n}\n\n.third-wrapper-second-heading {\n  font-size: 15px;\n  padding-left: 30px;\n}\n\n.third-wrapper-third-heading {\n  font-size: 15px;\n  padding-left: 30px;\n}\n\n.forth-heading {\n  padding-top: 20px;\n}\n\n.forth-wrapper-heading {\n  font-size: 15px;\n  padding-left: 30px;\n}\n\n.forth-wrapper-first-heading {\n  font-size: 15px;\n  padding-left: 30px;\n}\n\nion-item {\n  background-color: beige;\n}\n\nion-item.second-wrapper div.item-native {\n  background: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbnZpL0Rvd25sb2Fkcy9pbzUvU21hcnRBcC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7QUNFSjs7QURBRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBRTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERFO0VBQ0UsbUJBQUE7QUNJSjs7QURBRztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGRTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNLRjs7QURIRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ09KOztBREpFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURMRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRExFO0VBQ0UsaUJBQUE7QUNRSjs7QURORTtFQUNHLGVBQUE7RUFDRCxrQkFBQTtBQ1NKOztBRFBFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDVUo7O0FEUEE7RUFDRSx1QkFBQTtBQ1VGOztBRFJBO0VBQ0UsMEJBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbiAgfVxuICAudG9wLWhlYWRlci1iZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY29udGFpbmVyLXRvcC1oZWFkaW5ne1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgfVxuICAudG9wLWhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgfVxuICAuYXZhdGFye1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICBcbiAgICBcbiAgfVxuICAgLmF2YXRhci1pbWd7XG4gICAgaGVpZ2h0OiA4NXB4O1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIG1heC13aWR0aDogbm9uZTsgXG4gIH1cbiAgLmF2YXRhci13cmFwcGVyLXRvcC1oZWFkaW5ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbiAgLmF2YXRhci13cmFwcGVyLWJvdHRvbS1oZWFkaW5ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuc2Vjb25kLXdyYXBwZXJ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnNlY29uZC13cmFwcGVyLWhlYWRpbmd7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBcbiAgfVxuICAudGhpcmQtd3JhcHBlci1oZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgLnRoaXJkLXdyYXBwZXItc2Vjb25kLWhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBcbiAgfVxuICAudGhpcmQtd3JhcHBlci10aGlyZC1oZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICBcbiAgfVxuICAuZm9ydGgtaGVhZGluZ3tcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAuZm9ydGgtd3JhcHBlci1oZWFkaW5ne1xuICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICB9XG4gIC5mb3J0aC13cmFwcGVyLWZpcnN0LWhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxuXG5pb24taXRlbXtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5pb24taXRlbS5zZWNvbmQtd3JhcHBlciBkaXYuaXRlbS1uYXRpdmV7XG4gIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnRvcC1oZWFkZXItYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lci10b3AtaGVhZGluZyB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b3AtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmF2YXRhciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuXG4uYXZhdGFyLXdyYXBwZXItdG9wLWhlYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIG1heC13aWR0aDogbm9uZTtcbn1cblxuLmF2YXRhci13cmFwcGVyLWJvdHRvbS1oZWFkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zZWNvbmQtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnNlY29uZC13cmFwcGVyLWhlYWRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRoaXJkLXdyYXBwZXItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4udGhpcmQtd3JhcHBlci1zZWNvbmQtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4udGhpcmQtd3JhcHBlci10aGlyZC1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mb3J0aC1oZWFkaW5nIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5mb3J0aC13cmFwcGVyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZvcnRoLXdyYXBwZXItZmlyc3QtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG5pb24taXRlbS5zZWNvbmQtd3JhcHBlciBkaXYuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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

    let ProfilePage = class ProfilePage {
      constructor(navController) {
        this.navController = navController;
      }

      ngOnInit() {}

      gotoMessages() {
        this.navController.navigateForward('messages');
      }

      gotoAddHome() {
        this.navController.navigateForward('home-management');
      }

    };

    ProfilePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map