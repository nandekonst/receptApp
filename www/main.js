(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nandekonst/Desktop/myApp/src/main.ts */"zUnb");


/***/ }),

/***/ "9ii/":
/*!***********************************************!*\
  !*** ./src/app/services/admobfree.service.ts ***!
  \***********************************************/
/*! exports provided: AdmobfreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmobfreeService", function() { return AdmobfreeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "ZL19");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let AdmobfreeService = class AdmobfreeService {
    constructor(admobFree, platform) {
        this.admobFree = admobFree;
        this.platform = platform;
        this.insterstitialConfig = {
            isTesting: true,
            autoShow: false,
            id: "ca-app-pub-1224054838861389~1911947271"
        };
        platform.ready().then(() => {
            this.admobFree.interstitial.prepare().then(() => {
            }).catch(e => console.log(e));
        });
        this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
            this.admobFree.interstitial.prepare().then(() => { }).catch(e => console.log(e));
        });
    }
    showInterstitialAd() {
        this.admobFree.interstitial.isReady().then(() => {
            this.admobFree.interstitial.show().then(() => {
            }).catch(e => console.log(e));
        }).catch(e => console.log(console.log(e)));
    }
};
AdmobfreeService.ctorParameters = () => [
    { type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobFree"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
AdmobfreeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdmobfreeService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: varEnvironment, dictionaries, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varEnvironment", function() { return varEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaries", function() { return dictionaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var varEnvironment = {
    schema: "https"
};
var dictionaries;
(function (dictionaries) {
    dictionaries[dictionaries["MAINDB"] = 0] = "MAINDB";
    dictionaries[dictionaries["CHEMICDB"] = 1] = "CHEMICDB";
    dictionaries[dictionaries["COMPUTDB"] = 2] = "COMPUTDB";
    dictionaries[dictionaries["LEGALDB"] = 3] = "LEGALDB";
    dictionaries[dictionaries["MEDICDB"] = 4] = "MEDICDB";
    dictionaries[dictionaries["TECHNIDB"] = 5] = "TECHNIDB";
    dictionaries[dictionaries["TRADEDB"] = 6] = "TRADEDB";
    dictionaries[dictionaries["PROVERBDB"] = 7] = "PROVERBDB";
})(dictionaries || (dictionaries = {}));
;
const environment = {
    production: true,
    REDIRECTURL: 'localhost:4200',
    API_IP: 'droplet1.euroglot.nl',
    //API_IP: 'api.euroglot.nl',
    //API_IP: '10.78.75.3',
    DB_NAMES: "maindb,chemicdb,computdb,legaldb,medicdb,technidb,tradedb,proverbdb",
    //PORTS_DICTIONARY: '2345,2351,2352,2353,2354,2355,2356,2357',
    //PORTS_CONJUGATIONS: '2348,2371,2372,2373,2374,2375,2376,2377',
    //PORTS_RECOGNIZER: '2346,2361,2362,2363,2364,2365,2366,2367',
    //PORT_RESOURCE: '2347',
    //PORT_SOUFFLEUR: '2349',
    //PORT_AUTH: '2350',
    //PORT_MERGE: '2344',
    //PORT_CONFIG: '2343',
    //PORT_MERGE2: '2339',
    //PORT_MLPROXY: '2341',
    //PORT_PAY: '2338',
    //PORT_TERMINOLOGY: '2325',
    //PORT_SEGMENTER : '2333',
    //PORT_TRANSLATE: '2330',
    PORTS_DICTIONARY: '443,443,443,443,443,443,443,443',
    PORTS_CONJUGATIONS: '443,443,443,443,443,443,443,443',
    PORTS_RECOGNIZER: '443,443,443,443,443,443,443,443',
    PORT_RESOURCE: '443',
    PORT_SOUFFLEUR: '443',
    PORT_CONVERTER: '443',
    PORT_AUTH: '443',
    PORT_MERGE: '443',
    PORT_CONFIG: '443',
    PORT_MERGE2: '443',
    PORT_MLPROXY: '443',
    PORT_PAY: '443',
    PORT_TERMINOLOGY: '443',
    PORT_SEGMENTER: '443',
    PORT_TRANSLATE: '443',
    MERGE_FORMS: '/forms/',
    ENDPOINT_PAY: '/pay',
    ENDPOINT_CUSTOMER: '/customer/',
    ENDPOINT_CONVERTER: '/converter/',
    ENDPOINT_PRODUCTS: '/products/',
    ENDPOINT_PRODUCT: '/product/',
    ENDPOINT_ORDERS: '/orders/',
    ENDPOINT_ORDER: '/order/',
    ENDPOINT_BUY: '/buy/',
    ENDPOINT_SUBSCRIBE: '/subscribe/',
    ENDPOINT_MERGE: '/dictionaries',
    ENDPOINT_MERGE2: '/checks',
    ENDPOINT_DICTIONARY_INFO: '/dictionary_info/',
    ENDPOINT_CONCEPT_LIST: '/concept_list',
    ENDPOINT_DICTIONARY: '/dictionary',
    ENDPOINT_CONJUGATION: '/conjugations',
    ENDPOINT_RECOGNIZER: '/recognizer',
    ENDPOINT_RESOURCE: '/resource',
    ENDPOINT_SOUFFLEUR: '/souffleur',
    ENDPOINT_AUTH: '/authenticate',
    ENDPOINT_EGO_LOGIN: '/egonline/',
    ENDPOINT_LOGIN_LOGIN: '/loginauth/',
    ENDPOINT_GAUTH_LOGIN: '/gauth/',
    ENDPOINT_REGISTER_GAUTH: '/register_gauth/',
    ENDPOINT_REGISTER: '/register_loginauth/',
    ENDPOINT_CONFIG: '/configuration',
    ENDPOINT_MLPROXY: '/mlproxy',
    ENDPOINT_EUROGLOT: '/euroglot',
    ENDPOINT_LM: '/lm/',
    ENDPOINT_DEEPLAPI: '/deeplapi',
    ENDPOINT_V2: '/v2',
    ENDPOINT_TRANSLATE: '/translate',
    CONFIG: '/config/',
    ENDPOINT_EXPORT: '/export',
    ENDPOINT_CONCEPT: '/concept',
    ENDPOINT_UPDATE_CONCEPT: '/update_concept',
    ENDPOINT_DELETE_CONCEPT: '/delete_concept',
    ENDPOINT_UPDATE_WORD: '/update_word',
    ENDPOINT_WORD: '/word',
    ENDPOINT_DELETE_WORD: '/delete_word',
    ENDPOINT_TERMINOLOGY: '/terminology',
    ENDPOINT_SEGMENT: '/segmenter/text/',
    ENDPOINT_TRANSLATOR: '/translator/translates',
    IMPORT_ARGS: "",
    EXPORT_ARGS: 'full_data',
    ENDPOINT_IMPORT: '/import',
    RESET_PASSWORD_EGO: '/reset_ego_password/',
    RESET_PASSWORD: '/reset_login_password/',
    RESET_PASSWORD_MAILLINK: '://www.euroglotonline.nl/forgot-password?user=<!--USER-->&hash=<!--HASH-->',
    REGISTER_MAILLINK: '://www.euroglotonline.nl/register-login?user=<!--USER-->&registration_hash=<!--HASH-->',
    TRANSLATE: '/translate/',
    CREATE_TERMINOLOGY: '/create',
    DELETE_TERMINOLOGY: '/delete',
    TERMINOLOGY_LIST: '/list',
    TRANSLATES: '/translates/',
    THESAURUS: '/thesaurus/',
    FORMS: '/forms/',
    TRANSLATED_FORMS: '/translations/',
    SYNONYM_FORMS: '/synonyms/',
    SURROUNDINGS: '/surround/',
    RESOURCE: '/resource/',
    WORDTYPE: '/word_type/',
    WORDTYPES: '/word_types/',
    GENDERS: '/genders/',
    SOUFFLEUR: '/souffleur/',
    CONCEPTS: '/concepts/',
    RESOURCE_ARGS: '',
    ATTRIBUTE: '/attribute/',
    ATTRIBUTE_ARGS: '',
    ATTRIBUTES: '/attributes/',
    ATTRIBUTES_ARGS: '',
    TRANSLATE_ARGS: 'count=4&full_data',
    COUNT_ALL: 'count=0',
    THESAURUS_MT_ARGS: 'count=0&local_recurse&case_insensitive',
    THESAURUS_ARGS: 'full_data',
    SURROUNDINGS_ARGS: 'count=4',
    REFERENCE_ARGS: 'with_references',
    LOCAL_RECURSE: 'local_recurse',
    ALL_RECURSE: 'recurse',
    CASE_INSENSITIVE: 'case_insensitive',
    ALL_TRANSLATED_SYNONYMS: 'all_translated_synonyms',
    HIDE_DOUBLE_ALTERNATIVES: 'hide_double_alternatives',
    DIACRITIC_INSENSITIVE: 'diacritic_insensitive',
    TEST_PURCHASE: false
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "ZL19");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/admobfree.service */ "9ii/");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        providers: [_ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_11__["AdMobFree"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_admobfree_service__WEBPACK_IMPORTED_MODULE_12__["AdmobfreeService"], { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    getRandomRecipe() {
        return this.http.get(API_URL);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map