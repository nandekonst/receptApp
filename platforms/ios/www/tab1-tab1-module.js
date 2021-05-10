(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Ingredients\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-button (click)=\"showInterstitalAd()\">Show intersitial</ion-button>\n\n  <ion-card *ngFor=\"let recipe of recipes; let i = index\" >\n    <ion-card-content>\n      <img src={{recipe.strMealThumb}} />\n        <ion-card-title>\n       {{recipe.strMeal}}\n      </ion-card-title>\n      <p>Kitchen: {{recipe.strArea}}</p>\n      <p>Dish type: {{recipe.strTags}}</p>\n      <p>Dish category: {{recipe.strCategory}}</p>\n      <h2>Ingredients</h2>\n      <p>{{recipe.strMeasure1}} {{recipe.strIngredient1}}</p>\n      <p>{{recipe.strMeasure2}} {{recipe.strIngredient2}}</p>\n      <p>{{recipe.strMeasure3}} {{recipe.strIngredient3}}</p>\n      <p>{{recipe.strMeasure4}} {{recipe.strIngredient4}}</p>\n      <p>{{recipe.strMeasure5}} {{recipe.strIngredient5}}</p>\n      <p>{{recipe.strMeasure6}} {{recipe.strIngredient6}}</p>\n      <p>{{recipe.strMeasure7}} {{recipe.strIngredient7}}</p>\n      <p>{{recipe.strMeasure8}} {{recipe.strIngredient8}}</p>\n      <p>{{recipe.strMeasure9}} {{recipe.strIngredient9}}</p>\n      <p>{{recipe.strMeasure10}} {{recipe.strIngredien10}}</p>\n      <p>{{recipe.strMeasure11}} {{recipe.strIngredient11}}</p>\n      <p>{{recipe.strMeasure12}} {{recipe.strIngredient12}}</p>\n      <p>{{recipe.strMeasure13}} {{recipe.strIngredient13}}</p>\n      <p>{{recipe.strMeasure14}} {{recipe.strIngredient14}}</p>\n      <p>{{recipe.strMeasure15}} {{recipe.strIngredient15}}</p>\n      <p>{{recipe.strMeasure16}} {{recipe.strIngredient16}}</p>\n      <p>{{recipe.strMeasure17}} {{recipe.strIngredient17}}</p>\n      <p>{{recipe.strMeasure18}} {{recipe.strIngredient18}}</p>\n      <p>{{recipe.strMeasure19}} {{recipe.strIngredient19}}</p>\n      <p>{{recipe.strMeasure20}} {{recipe.strIngredient20}}</p>\n      <h2>Preparation</h2>\n      {{recipe.strInstructions}}\n\n\n    </ion-card-content>\n   \n\n\n\n\n  </ion-card>\n\n  <app-explore-container name=\"Random dish\"></app-explore-container>\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.service */ "N+K7");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/admobfree.service */ "9ii/");







let Tab1Page = class Tab1Page {
    constructor(adMob, authService, http) {
        this.adMob = adMob;
        this.authService = authService;
        this.http = http;
        this.recipes = [];
    }
    ngOnInit() {
        this.getRandomRecipe();
        /*setTimeout(() => {
          this.adMob.showInterstitialAd();
        }, 5000);*/
    }
    showInterstitalAd() {
        this.adMob.showInterstitialAd();
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getRandomRecipe();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getRandomRecipe() {
        this.authService.getRandomRecipe().subscribe(data => this.getRandomRecipeSuccess(data), error => this.getRandomRecipeError(error));
    }
    getRandomRecipeSuccess(data) {
        this.recipes = data.meals;
        for (var ingredient of this.recipes) {
            console.log(ingredient.ex);
        }
    }
    getRandomRecipeError(error) {
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_admobfree_service__WEBPACK_IMPORTED_MODULE_6__["AdmobfreeService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HttpService = class HttpService {
    constructor() { }
    hello() {
        console.log("Hello");
    }
};
HttpService.ctorParameters = () => [];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map