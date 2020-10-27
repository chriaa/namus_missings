(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asant\Desktop\sideprojects\namus\namus-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CQDe":
/*!***************************************!*\
  !*** ./src/app/all-states.service.ts ***!
  \***************************************/
/*! exports provided: AllStatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllStatesService", function() { return AllStatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AllStatesService {
    constructor(http) {
        this.http = http;
    }
    getStates() {
        return this.http.get('api/all-states');
    }
}
AllStatesService.ɵfac = function AllStatesService_Factory(t) { return new (t || AllStatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AllStatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllStatesService, factory: AllStatesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllStatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "EFNh":
/*!***********************************!*\
  !*** ./src/app/states.service.ts ***!
  \***********************************/
/*! exports provided: StatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesService", function() { return StatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class StatesService {
    constructor(http) {
        this.http = http;
    }
    //gets the state break down
    getStateFrequencies(state) {
        return this.http.get('/api/state/' + state + "/");
    }
    //get the state breakdown but a post 
    getCountyFreq(state, start_date, end_date) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var body = { "state": state, "start": start_date, "end": end_date };
        return this.http.post("/api/state/" + state, body, httpOptions);
    }
    //gets the frequencies of every city within a given county
    getCityFrequencies(state, county, start_date, end_date) {
        //get the counts of different cities
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var body = { "state": state, "county": county, "start": start_date, "end": end_date };
        return this.http.post("/api/county/" + county, body, httpOptions);
    }
}
StatesService.ɵfac = function StatesService_Factory(t) { return new (t || StatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
StatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatesService, factory: StatesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "F97B":
/*!**********************************************!*\
  !*** ./src/app/statistic-service.service.ts ***!
  \**********************************************/
/*! exports provided: StatisticServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticServiceService", function() { return StatisticServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class StatisticServiceService {
    constructor(http) {
        this.http = http;
    }
    getAverageAge(state, start_date, end_date) {
        //get the counts of different cities
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var body = { "state": state, "start": start_date, "end": end_date };
        return this.http.post("/api/stats/avg-age", body, httpOptions);
    }
    //get the top counties by raw missing persons counts by given year
    getTopFrequencies(start_date, end_date) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var body = { "start": start_date, "end": end_date };
        return this.http.post("/api/yearly_count", body, httpOptions);
    }
    //are there any demographics that are overly represented in the namus database
    getInsights(start_date, end_date) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var body = { "start": start_date, "end": end_date };
        return this.http.post("/api/stats/top", body, httpOptions);
    }
}
StatisticServiceService.ɵfac = function StatisticServiceService_Factory(t) { return new (t || StatisticServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
StatisticServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatisticServiceService, factory: StatisticServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _all_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-states.service */ "CQDe");





class WelcomeComponent {
    constructor(http, stateListService) {
        //this.getListStates();
        this.http = http;
        this.stateListService = stateListService;
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.getListStates();
    }
    onSubmit() {
        alert("The State is : " + this.input_state);
    }
    getListStates() {
        this.stateListService.getStates().subscribe(data => {
            this.all_states = data;
        }, error => {
            alert("could not get list of states");
        });
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_states_service__WEBPACK_IMPORTED_MODULE_3__["AllStatesService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 11, vars: 0, consts: [["id", "blurb container", 1, "container-fluid", "jumbotron", "bg-light", "mb-3"], [1, "display-4"], [1, "lead"], [1, "my-4"], ["id", "blurb"], ["href", "#", "role", "button", 1, "btn", "btn-primary", "btn-lg"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Namus Missing Persons Data Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To understand missing person statistics of different states, counties, and cities as well as demographic data of those missing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Over 600,000 people going missing every year in the United State, and while most are found alive and well many others are not. The National Missing and Unidentified Persons system is a database created by the National Institute of Justice that acts as a public repository for missing persons cases that were never solved. With this project I hope to shed some light on the demographic and the geographic patterns seen within these missing persons cases. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#blurb[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2JsdXJiIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _all_states_service__WEBPACK_IMPORTED_MODULE_3__["AllStatesService"] }]; }, null); })();


/***/ }),

/***/ "NXVR":
/*!***********************************************************!*\
  !*** ./src/app/custom-material/custom-material.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class CustomMaterialModule {
}
CustomMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomMaterialModule });
CustomMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomMaterialModule_Factory(t) { return new (t || CustomMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]], exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                exports: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RsDq":
/*!********************************************************!*\
  !*** ./src/app/demographics/demographics.component.ts ***!
  \********************************************************/
/*! exports provided: DemographicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemographicsComponent", function() { return DemographicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../people.service */ "gKce");



class DemographicsComponent {
    constructor(people) {
        this.people = people;
    }
    ngOnInit() {
        //console.log(this.selected_region)
    }
    ngAfterViewInit() {
        var methnicity = [];
        var fethnicity = [];
        var fcounts = [];
        //const methnicity = []
        var mcounts = [];
        this.people.getDemographicsData(this.stateName, this.start_date, this.end_date).subscribe(data => {
            console.log(data);
            data.forEach(entry => {
                if (entry.ethnicity) {
                    fethnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Women");
                    methnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Men");
                }
                else {
                    fethnicity.push(entry.race_ethnicity + " Women");
                    methnicity.push(entry.race_ethnicity + " Men");
                }
                // ethnicity.push((entry.race_ethnicity + " " + entry.ethnicity).trim())
                fcounts.push([entry.fchildren, entry.fteen, entry.fyoung_adult, entry.fadult, entry.folder_adult, entry.fsenior]);
                mcounts.push([entry.mchildren, entry.mteen, entry.myoung_adult, entry.madult, entry.molder_adult, entry.msenior]);
            });
            //console.log(ethnicity.length)
            //console.log(ethnicity)
            var series = this.getStackChartData(fethnicity, methnicity, fcounts, mcounts);
            console.log(series);
            this.renderStack(series);
        });
    }
    ngOnChanges(changes) {
        var methnicity = [];
        var fethnicity = [];
        var fcounts = [];
        //const methnicity = []
        var mcounts = [];
        this.people.getDemographicsData(this.stateName, this.start_date, this.end_date).subscribe(data => {
            console.log(data);
            data.forEach(entry => {
                if (entry.ethnicity) {
                    fethnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Women");
                    methnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Men");
                }
                else {
                    fethnicity.push(entry.race_ethnicity + " Women");
                    methnicity.push(entry.race_ethnicity + " Men");
                }
                // ethnicity.push((entry.race_ethnicity + " " + entry.ethnicity).trim())
                fcounts.push([entry.fchildren, entry.fteen, entry.fyoung_adult, entry.fadult, entry.folder_adult, entry.fsenior]);
                mcounts.push([entry.mchildren, entry.mteen, entry.myoung_adult, entry.madult, entry.molder_adult, entry.msenior]);
            });
            //console.log(ethnicity.length)
            //console.log(ethnicity)
            var series = this.getStackChartData(fethnicity, methnicity, fcounts, mcounts);
            console.log(series);
            this.renderStack(series);
        });
    }
    getStackChartData(fethnicity, methnicity, fcounts, mcounts) {
        // console.log(mcounts)
        // console.log(ethnicity)
        var series = [];
        var len = fethnicity.length;
        for (var i = 0; i < len; i++) {
            var mdict = {
                name: methnicity[i],
                data: mcounts[i],
                stack: "male"
            };
            var fdict = {
                name: fethnicity[i],
                data: fcounts[i],
                stack: "female"
            };
            series.push(mdict);
            series.push(fdict);
        }
        return series;
        //this.renderStackChart(series);
    }
    renderStack(stackdata) {
        Highcharts.chart('demo', {
            chart: {
                type: 'column'
            },
            title: {
                text: `Total Missing Persons, grouped by gender : ${this.stateName}, ${this.start_date} to ${this.end_date}`
            },
            xAxis: {
                title: {
                    text: "Age Ranges of Missing People"
                },
                categories: ['0-10', '11-17', '18-26', '27-44', '45-65', '66+']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number Of People Missing'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: stackdata
        });
    }
    renderDrill() {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Browser market shares. January, 2018'
            },
            subtitle: {
                text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Chrome",
                            y: 62.74,
                            drilldown: "Chrome"
                        },
                        {
                            name: "Firefox",
                            y: 10.57,
                            drilldown: "Firefox"
                        },
                        {
                            name: "Internet Explorer",
                            y: 7.23,
                            drilldown: "Internet Explorer"
                        },
                        {
                            name: "Safari",
                            y: 5.58,
                            drilldown: "Safari"
                        },
                        {
                            name: "Edge",
                            y: 4.02,
                            drilldown: "Edge"
                        },
                        {
                            name: "Opera",
                            y: 1.92,
                            drilldown: "Opera"
                        },
                        {
                            name: "Other",
                            y: 7.62,
                            drilldown: null
                        }
                    ]
                }
            ],
            drilldown: {
                series: [
                    {
                        name: "Chrome",
                        id: "Chrome",
                        data: [
                            [
                                "v65.0",
                                0.1
                            ],
                            [
                                "v64.0",
                                1.3
                            ],
                            [
                                "v63.0",
                                53.02
                            ],
                            [
                                "v62.0",
                                1.4
                            ],
                            [
                                "v61.0",
                                0.88
                            ],
                            [
                                "v60.0",
                                0.56
                            ],
                            [
                                "v59.0",
                                0.45
                            ],
                            [
                                "v58.0",
                                0.49
                            ],
                            [
                                "v57.0",
                                0.32
                            ],
                            [
                                "v56.0",
                                0.29
                            ],
                            [
                                "v55.0",
                                0.79
                            ],
                            [
                                "v54.0",
                                0.18
                            ],
                            [
                                "v51.0",
                                0.13
                            ],
                            [
                                "v49.0",
                                2.16
                            ],
                            [
                                "v48.0",
                                0.13
                            ],
                            [
                                "v47.0",
                                0.11
                            ],
                            [
                                "v43.0",
                                0.17
                            ],
                            [
                                "v29.0",
                                0.26
                            ]
                        ]
                    },
                    {
                        name: "Firefox",
                        id: "Firefox",
                        data: [
                            [
                                "v58.0",
                                1.02
                            ],
                            [
                                "v57.0",
                                7.36
                            ],
                            [
                                "v56.0",
                                0.35
                            ],
                            [
                                "v55.0",
                                0.11
                            ],
                            [
                                "v54.0",
                                0.1
                            ],
                            [
                                "v52.0",
                                0.95
                            ],
                            [
                                "v51.0",
                                0.15
                            ],
                            [
                                "v50.0",
                                0.1
                            ],
                            [
                                "v48.0",
                                0.31
                            ],
                            [
                                "v47.0",
                                0.12
                            ]
                        ]
                    },
                    {
                        name: "Internet Explorer",
                        id: "Internet Explorer",
                        data: [
                            [
                                "v11.0",
                                6.2
                            ],
                            [
                                "v10.0",
                                0.29
                            ],
                            [
                                "v9.0",
                                0.27
                            ],
                            [
                                "v8.0",
                                0.47
                            ]
                        ]
                    },
                    {
                        name: "Safari",
                        id: "Safari",
                        data: [
                            [
                                "v11.0",
                                3.39
                            ],
                            [
                                "v10.1",
                                0.96
                            ],
                            [
                                "v10.0",
                                0.36
                            ],
                            [
                                "v9.1",
                                0.54
                            ],
                            [
                                "v9.0",
                                0.13
                            ],
                            [
                                "v5.1",
                                0.2
                            ]
                        ]
                    },
                    {
                        name: "Edge",
                        id: "Edge",
                        data: [
                            [
                                "v16",
                                2.6
                            ],
                            [
                                "v15",
                                0.92
                            ],
                            [
                                "v14",
                                0.4
                            ],
                            [
                                "v13",
                                0.1
                            ]
                        ]
                    },
                    {
                        name: "Opera",
                        id: "Opera",
                        data: [
                            [
                                "v50.0",
                                0.96
                            ],
                            [
                                "v49.0",
                                0.82
                            ],
                            [
                                "v12.1",
                                0.14
                            ]
                        ]
                    }
                ]
            }
        });
    }
}
DemographicsComponent.ɵfac = function DemographicsComponent_Factory(t) { return new (t || DemographicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"])); };
DemographicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemographicsComponent, selectors: [["app-demographics"]], inputs: { start_date: "start_date", end_date: "end_date", stateName: "stateName", data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 1, consts: [["id", "demo", "container", "demo"], [1, "highcharts-description"]], template: function DemographicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "demographics works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" this is the location: ", ctx.start_date, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9ncmFwaGljcy9kZW1vZ3JhcGhpY3MuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemographicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demographics',
                templateUrl: './demographics.component.html',
                styleUrls: ['./demographics.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"] }]; }, { start_date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], end_date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stateName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AppComponent {
    constructor() {
        this.title = 'namus-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "text-white", "bg-dark", "mb-3"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/state/Arizona", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/insight", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], ["id", "text", 1, "mt-auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Namus Data Dash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "State Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Data from: https://public.opendatasoft.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " website by Christina Asante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    position: relative;\r\n    margin: 0;\r\n    padding-bottom: 100px; \r\n    box-sizing: border-box;\r\n  }\r\n  \r\nfooter[_ngcontent-%COMP%] {\r\n    background: #222;\r\n    color: white;\r\n    bottom: 0;\r\n    height: 150px;\r\n    \r\n\r\n    padding:45px 0 20px;\r\n    font-size:15px;\r\n    line-height:24px;\r\n  }\r\n  \r\n#text[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n  \r\n#blurb[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLHNCQUFzQjtFQUN4Qjs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7OztJQUdiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDsgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgXHJcblxyXG4gICAgcGFkZGluZzo0NXB4IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MjRweDtcclxuICB9XHJcblxyXG4jdGV4dCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jYmx1cmIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XOeH":
/*!****************************************************!*\
  !*** ./src/app/user-input/user-input.component.ts ***!
  \****************************************************/
/*! exports provided: UserInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInputComponent", function() { return UserInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserInputComponent.ɵfac = function UserInputComponent_Factory(t) { return new (t || UserInputComponent)(); };
UserInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInputComponent, selectors: [["app-user-input"]], decls: 2, vars: 0, template: function UserInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-input works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5wdXQvdXNlci1pbnB1dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-input',
                templateUrl: './user-input.component.html',
                styleUrls: ['./user-input.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _insights_insights_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./insights/insights.component */ "rYmT");
/* harmony import */ var _state_stats_state_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state-stats/state-stats.component */ "rq0a");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-material/custom-material.module */ "NXVR");
/* harmony import */ var _demographics_demographics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demographics/demographics.component */ "RsDq");
/* harmony import */ var _user_input_user_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-input/user-input.component */ "XOeH");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
        _insights_insights_component__WEBPACK_IMPORTED_MODULE_7__["InsightsComponent"],
        _state_stats_state_stats_component__WEBPACK_IMPORTED_MODULE_8__["StateStatsComponent"],
        _demographics_demographics_component__WEBPACK_IMPORTED_MODULE_10__["DemographicsComponent"],
        _user_input_user_input_component__WEBPACK_IMPORTED_MODULE_11__["UserInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                    _insights_insights_component__WEBPACK_IMPORTED_MODULE_7__["InsightsComponent"],
                    _state_stats_state_stats_component__WEBPACK_IMPORTED_MODULE_8__["StateStatsComponent"],
                    _demographics_demographics_component__WEBPACK_IMPORTED_MODULE_10__["DemographicsComponent"],
                    _user_input_user_input_component__WEBPACK_IMPORTED_MODULE_11__["UserInputComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"],
                    angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gKce":
/*!***********************************!*\
  !*** ./src/app/people.service.ts ***!
  \***********************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PeopleService {
    constructor(http) {
        this.http = http;
    }
    getPeople() {
        return this.http.get('/api/people');
    }
    getFrequencyRates() {
        return this.http.get('/api/frequency/data');
    }
    getFrequencyRatesDates(start_date, end_date) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        const body = { "start": start_date, "end": end_date };
        return this.http.post("/api/frequency/data ", body, httpOptions);
    }
    getGenderBreakdown() {
        return this.http.get('/api/demographics/gender ');
    }
    getGenderAgeBreakdown() {
        return this.http.get('/api/demographics/gender/age');
    }
    getEthnicityBreakdown() {
        return this.http.get('/api/demographics/ethnicity/');
    }
    getFrequencyCounts() {
        return this.http.get('/api/frequency/raw');
    }
    getDemographicsData(state, start_date, end_date) {
        //get the demographics of the current chosen state/county/city
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        const body = { "state": state, "start": start_date, "end": end_date };
        return this.http.post("/api/county-demographics ", body, httpOptions);
    }
}
PeopleService.ɵfac = function PeopleService_Factory(t) { return new (t || PeopleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PeopleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeopleService, factory: PeopleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rYmT":
/*!************************************************!*\
  !*** ./src/app/insights/insights.component.ts ***!
  \************************************************/
/*! exports provided: InsightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightsComponent", function() { return InsightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _statistic_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statistic-service.service */ "F97B");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../people.service */ "gKce");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");








class InsightsComponent {
    constructor(statService, peopleService) {
        this.statService = statService;
        this.peopleService = peopleService;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            start_form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('2015-01-01'),
            end_form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('2015-12-31'),
        });
        this.date_range = {
            start_date: '2015-01-01',
            end_date: '2015-12-31'
        };
        this.peopleService.getFrequencyCounts().subscribe(data => {
            const county = [];
            const counts = [];
            data.forEach(entry => {
                county.push(entry.full_county_name + "," + entry.state_name);
                counts.push(entry.frequentCount);
            });
            this.renderFrequencyChart("Namus Entries by County", "freq", "Number Missing", county, counts);
        });
        this.peopleService.getGenderAgeBreakdown().subscribe(data => {
            const fcounts = [];
            const mcounts = [];
            fcounts.push(data[0].fchildren, data[0].fteen, data[0].fyoung_adult, data[0].fadult, data[0].folder_adult, data[0].fsenior);
            mcounts.push(data[0].mchildren, data[0].mteen, data[0].myoung_adult, data[0].madult, data[0].molder_adult, data[0].msenior);
            this.renderAgeStackBar(fcounts, mcounts);
        });
        this.statService.getTopFrequencies(this.range.get('start_form').value, this.range.get('end_form').value).subscribe(data => {
            //gets the counties with the top counts
            const county = [];
            const count = [];
            data.forEach(entry => {
                county.push(entry.full_county_name + "," + entry.state_name);
                count.push(entry.frequentCount);
            });
            this.renderFrequencyChart("Number of Missing Persons by County", "raw", "Number Missing", county, count);
        });
        this.peopleService.getGenderBreakdown().subscribe(data => {
            const num_women = data[0].female;
            const num_men = data[0].male;
            var fval = {
                name: 'Female',
                y: data[0].female
            };
            var mval = {
                name: 'Male',
                y: data[0].male
            };
            var d = [];
            d.push(fval);
            d.push(mval);
            this.renderGenderPieChart(d);
        });
        this.peopleService.getFrequencyRatesDates(this.range.get('start_form').value, this.range.get('end_form').value).subscribe(data => {
            const people = [];
            const counts = [];
            data.forEach(person => {
                people.push(person.county + "," + person.state_name);
                counts.push(person.frequentCount);
            });
            this.renderFrequencyChart("Ratio of Missing People By County Population", "frequency_rates", "Ratio", people, counts);
        });
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
    onSubmit() {
        this.statService.getTopFrequencies(this.range.get('start_form').value, this.range.get('end_form').value).subscribe(data => {
            //gets the counties with the top counts
            const county = [];
            const count = [];
            data.forEach(entry => {
                county.push(entry.full_county_name + "," + entry.state_name);
                count.push(entry.frequentCount);
            });
            this.renderFrequencyChart("Number of Missing Persons by County", "raw", "Number Missing", county, count);
        });
        this.peopleService.getFrequencyRatesDates(this.range.get('start_form').value, this.range.get('end_form').value).subscribe(data => {
            const people = [];
            const counts = [];
            data.forEach(person => {
                people.push(person.county + "," + person.state_name);
                counts.push(person.frequentCount);
            });
            this.renderFrequencyChart("Ratio of Missing People By County Population", "frequency_rates", "Ratio", people, counts);
        });
    }
    renderChart(people, counts) {
        Highcharts.chart('frequency_rates', { chart: { type: 'column' },
            title: { text: 'No. of Missing by County' },
            xAxis: { categories: people, title: { text: 'County' }, labels: { step: 1, rotation: -45, skew3d: true } },
            yAxis: { min: 0, title: { text: 'No. Missing' },
                labels: { overflow: 'justify' } },
            plotOptions: { bar: { dataLabels: { enabled: true } } },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }] });
    }
    //data breakdown - demographics: age, gender, ethnicity
    renderFrequencyChart(titleName, chartName, yaxis, counties, counts) {
        Highcharts.chart(chartName, {
            chart: {
                renderTo: chartName,
                type: 'column'
            },
            title: {
                text: titleName
            },
            subtitle: {
                text: 'Source: https://public.opendatasoft.com'
            },
            xAxis: {
                categories: counties,
                crosshair: true
            },
            yAxis: {
                class: 'highcharts-colors-2',
                min: 0,
                title: {
                    text: yaxis
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Namus Entries per County',
                    data: counts
                }]
        });
    }
    renderGenderPieChart(data) {
        // Build the chart
        console.log(data);
        Highcharts.chart('gender_piechart', {
            chart: {
                //renderTo: "gender",
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Gender Breakdown'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Gender',
                    colorByPoint: true,
                    data: data
                }]
        });
    }
    renderAgeStackBar(fcounts, mcounts) {
        Highcharts.chart('age_gender', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Age Breakdown'
            },
            xAxis: {
                categories: ['0-10', '11-17', '18-26', '27-44', '45-65', '66+']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'Female',
                    data: fcounts
                }, {
                    name: 'Male',
                    data: mcounts
                }]
        });
    }
}
InsightsComponent.ɵfac = function InsightsComponent_Factory(t) { return new (t || InsightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_statistic_service_service__WEBPACK_IMPORTED_MODULE_2__["StatisticServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"])); };
InsightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsightsComponent, selectors: [["app-insights"]], decls: 34, vars: 3, consts: [[1, "container"], ["id", "freq"], [1, "row"], [1, "col"], ["id", "age_gender"], ["id", "gender_piechart"], ["id", "frequency_rates"], ["id", "raw"], [1, "blurb"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "dateChange", "update()", "formControlName", "start_form", "placeholder", "Start date"], ["matEndDate", "", "dateChange", "update()", "formControlName", "end_form", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "card-body"], [1, "btn", "btn-primary", 3, "click"]], template: function InsightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Data Breakdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " There are 10 entries with the earliest being in January of 1902 and the latest being from May of 2018, with most cases from California, Florida, Texas and Arizona. There is an average of 185 persons per state, and 9 per county within the database. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Yearly Breakdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Top frequencies given by county population only for counties 2010 and later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Enter a date range : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsightsComponent_Template_a_click_32_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDateRangePicker"]], styles: ["highcharts-color-1[_ngcontent-%COMP%]{\r\n    color: green;\r\n}\r\n\r\n#blurb[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zaWdodHMvaW5zaWdodHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9pbnNpZ2h0cy9pbnNpZ2h0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGlnaGNoYXJ0cy1jb2xvci0xe1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4jYmx1cmJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsightsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-insights',
                templateUrl: './insights.component.html',
                styleUrls: ['./insights.component.css']
            }]
    }], function () { return [{ type: _statistic_service_service__WEBPACK_IMPORTED_MODULE_2__["StatisticServiceService"] }, { type: _people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"] }]; }, null); })();


/***/ }),

/***/ "rq0a":
/*!******************************************************!*\
  !*** ./src/app/state-stats/state-stats.component.ts ***!
  \******************************************************/
/*! exports provided: StateStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateStatsComponent", function() { return StateStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/drilldown */ "RSNc");
/* harmony import */ var highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../people.service */ "gKce");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _states_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../states.service */ "EFNh");
/* harmony import */ var _all_states_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../all-states.service */ "CQDe");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function StateStatsComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r2.full_state_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r2.full_state_name, " ");
} }
highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_2___default()(Highcharts);
class StateStatsComponent {
    constructor(datePipe, people, ref, http, router, fb, stateService, route, stateListService) {
        this.datePipe = datePipe;
        this.people = people;
        this.ref = ref;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.stateService = stateService;
        this.route = route;
        this.stateListService = stateListService;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            start_form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            end_form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.date_range = {
            start_date: '2015-01-01',
            end_date: '2015-12-31'
        };
        route.paramMap.subscribe((paramMap) => {
            this.stateName = paramMap.get('state');
            this.selected_region = this.stateName;
        });
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 10, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
        this.stateService.getCountyFreq(this.stateName, this.date_range.start_date, this.date_range.end_date).subscribe(data => {
            const county = [];
            const counts = [];
            data.forEach(entry => {
                county.push(entry.full_county_name);
                counts.push(entry.ratio);
            });
            //this.renderChart(county,counts);
            this.renderDrillChart(county, counts);
            //this.renderStackChart()                           
        });
        var methnicity = [];
        var fethnicity = [];
        var fcounts = [];
        var mcounts = [];
        this.people.getDemographicsData(this.stateName, this.date_range.start_date, this.date_range.end_date).subscribe(data => {
            data.forEach(entry => {
                if (entry.ethnicity) {
                    fethnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Women");
                    methnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Men");
                }
                else {
                    fethnicity.push(entry.race_ethnicity + " Women");
                    methnicity.push(entry.race_ethnicity + " Men");
                }
                // ethnicity.push((entry.race_ethnicity + " " + entry.ethnicity).trim())
                fcounts.push([entry.fchildren, entry.fteen, entry.fyoung_adult, entry.fadult, entry.folder_adult, entry.fsenior]);
                mcounts.push([entry.mchildren, entry.mteen, entry.myoung_adult, entry.madult, entry.molder_adult, entry.msenior]);
            });
            var series = this.getStackChartData(fethnicity, methnicity, fcounts, mcounts);
            this.demo_stackdata = series;
            this.renderStackChart(series);
        });
    }
    update() {
        this.date_range.start_date = this.range.get('start_form').value;
        this.date_range.end_date = this.range.get('end_form').value;
    }
    getStackChartData(fethnicity, methnicity, fcounts, mcounts) {
        var series = [];
        var len = fethnicity.length;
        for (var i = 0; i < len; i++) {
            var mdict = {
                name: methnicity[i],
                data: mcounts[i],
                stack: "male"
            };
            var fdict = {
                name: fethnicity[i],
                data: fcounts[i],
                stack: "female"
            };
            series.push(mdict);
            series.push(fdict);
        }
        return series;
        //this.renderStackChart(series);
    }
    renderStackChart(stackdata) {
        var st = this.range.get('start_form').value;
        var et = this.range.get('end_form').value;
        Highcharts.chart('demographics', {
            chart: {
                type: 'column'
            },
            title: {
                text: `Total Missing Persons, grouped by gender : ${this.stateName}, ${this.date_range.start_date} to ${this.date_range.end_date}`
            },
            xAxis: {
                title: {
                    text: "Age Ranges of Missing People"
                },
                categories: ['0-10', '11-17', '18-26', '27-44', '45-65', '66+']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number Of People Missing'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: stackdata
        });
    }
    onSubmit() {
        this.date_range.start_date = this.datePipe.transform(this.range.get('start_form').value, "yyyy-MM-dd");
        this.date_range.end_date = this.datePipe.transform(this.range.get('end_form').value, "yyyy-MM-dd");
        this.stateName = this.input_state;
        this.stateService.getCountyFreq(this.input_state, this.date_range.start_date, this.date_range.end_date).subscribe(data => {
            console.log(data);
            const county = [];
            const counts = [];
            data.forEach(entry => {
                county.push(entry.full_county_name);
                counts.push(entry.ratio);
            });
            //this.renderChart(county,counts);
            this.renderDrillChart(county, counts);
        });
        var methnicity = [];
        var fethnicity = [];
        var fcounts = [];
        //const methnicity = []
        var mcounts = [];
        this.people.getDemographicsData(this.stateName, this.date_range.start_date, this.date_range.end_date).subscribe(data => {
            data.forEach(entry => {
                if (entry.ethnicity) {
                    fethnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Female(s)");
                    methnicity.push(entry.race_ethnicity + " " + entry.ethnicity + " Male(s)");
                }
                else {
                    fethnicity.push(entry.race_ethnicity + " Female(s)");
                    methnicity.push(entry.race_ethnicity + " Male(s)");
                }
                // ethnicity.push((entry.race_ethnicity + " " + entry.ethnicity).trim())
                fcounts.push([entry.fchildren, entry.fteen, entry.fyoung_adult, entry.fadult, entry.folder_adult, entry.fsenior]);
                mcounts.push([entry.mchildren, entry.mteen, entry.myoung_adult, entry.madult, entry.molder_adult, entry.msenior]);
            });
            var series = this.getStackChartData(fethnicity, methnicity, fcounts, mcounts);
            this.renderStackChart(series);
        });
    }
    ngOnInit() {
        this.getListStates();
        this.range.get('start_form').valueChanges.subscribe(data => { this.date_range.start_date = data; });
        this.range.get('end_form').valueChanges.subscribe(data => { this.date_range.end_date = data; });
    }
    updateRegion(region) {
        this.selected_region = region;
        alert(this.selected_region);
    }
    getListStates() {
        this.stateListService.getStates().subscribe(data => {
            this.all_states = data;
        }, error => {
            alert("could not get list of states");
        });
    }
    getDrilldownData(counties) {
        //need to get the number of missing people per city per county 
        var cityData = [];
        for (var i = 0; i < counties.length; i++) {
            const d = [];
            this.stateService.getCityFrequencies(this.stateName, counties[i], this.date_range.start_date, this.date_range.end_date).subscribe(data => {
                const cities = [];
                const counts = [];
                const current = [];
                data.forEach(entry => {
                    d.push([entry.city, entry.city_counts]);
                });
            });
            var thisCounty = {
                name: counties[i],
                id: counties[i],
                data: d
            };
            //alert(thisCounty)
            //alert(thisCounty)
            cityData[i] = thisCounty;
        }
        return cityData;
    }
    getDrillDownSeries(counties, counts) {
        var data = [];
        for (var i = 0; i < counties.length; i++) {
            var thisCounty = {
                name: counties[i],
                y: counts[i],
                drilldown: counties[i]
            };
            data[i] = thisCounty;
        }
        return data;
    }
    renderChart(county, counts) {
        Highcharts.chart('bargraph', { chart: { type: 'column' },
            title: { text: 'Missing Persons by County' },
            xAxis: { categories: county, title: { text: 'County' }, labels: { step: 1, rotation: -45, skew3d: true } },
            yAxis: { min: 0, title: { text: 'Ratio Missing by Population' },
                labels: { overflow: 'justify' } },
            plotOptions: { bar: { dataLabels: { enabled: true } } },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }] });
    }
    renderDrillChart(counties, counts) {
        Highcharts.chart('drilldown', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function (e) {
                        this.xAxis[0].setTitle({ text: 'City' });
                        this.yAxis[0].setTitle({ text: 'Number of Missing People' });
                    },
                    drillup: function (e) {
                        this.xAxis[0].setTitle({ text: 'County' });
                        this.yAxis[0].setTitle({ text: 'Ratio Of Missing Persons' });
                    }
                }
            },
            title: {
                text: 'Missing Persons by County'
            },
            subtitle: {
                text: 'Click the columns to view county breakdown. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Ratio of Missing by Population'
                }
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    events: {
                        click: function (event) {
                            //alert(
                            //event.point.name + ' clicked\n'
                            //set demographics values from here  
                            this.selected_region = event.point.name;
                            //this. renderStackCharts()
                            // );
                        }
                    },
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>'
            },
            series: [
                {
                    name: "Counties",
                    colorByPoint: true,
                    data: this.getDrillDownSeries(counties, counts)
                }
            ],
            drilldown: {
                series: this.getDrilldownData(counties)
            }
        });
    }
}
StateStatsComponent.ɵfac = function StateStatsComponent_Factory(t) { return new (t || StateStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_states_service__WEBPACK_IMPORTED_MODULE_7__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_states_service__WEBPACK_IMPORTED_MODULE_8__["AllStatesService"])); };
StateStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateStatsComponent, selectors: [["app-state-stats"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], decls: 42, vars: 18, consts: [[1, "container"], [1, "highcharts-figure"], ["id", "drilldown"], [1, "highcharts-description"], [1, "row"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "center"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "dateChange", "update()", "formControlName", "start_form", "placeholder", "Start date", 3, "min"], ["matEndDate", "", "dateChange", "update()", "formControlName", "end_form", "placeholder", "End date", 3, "max"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "card-body"], [1, "btn", "btn-primary", 3, "routerLink", "click"], ["id", "demographics"], [3, "value"]], template: function StateStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function StateStatsComponent_Template_mat_select_valueChange_12_listener($event) { return ctx.input_state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StateStatsComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enter a date range : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-date-range-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-date-range-picker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateStatsComponent_Template_a_click_26_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stateName, " State Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.input_state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.all_states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/state/", ctx.input_state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" In ", ctx.stateName, " between ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 12, ctx.date_range.start_date, "shortDate"), " and ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 15, ctx.date_range.end_date, "shortDate"), ", there are (number of missing person) from this state within the Namus database, and. The county with the highest number of missing persons by population is (countyName). ");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDateRangePicker"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    margin-right: 12px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGUtc3RhdHMvc3RhdGUtc3RhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlLXN0YXRzL3N0YXRlLXN0YXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-state-stats',
                templateUrl: './state-stats.component.html',
                styleUrls: ['./state-stats.component.css'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _states_service__WEBPACK_IMPORTED_MODULE_7__["StatesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _all_states_service__WEBPACK_IMPORTED_MODULE_8__["AllStatesService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _insights_insights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insights/insights.component */ "rYmT");
/* harmony import */ var _state_stats_state_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-stats/state-stats.component */ "rq0a");







const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'insight',
        pathMatch: 'full',
        component: _insights_insights_component__WEBPACK_IMPORTED_MODULE_3__["InsightsComponent"]
    },
    {
        path: 'state/:state',
        pathMatch: 'full',
        component: _state_stats_state_stats_component__WEBPACK_IMPORTED_MODULE_4__["StateStatsComponent"]
    },
    {
        path: 'static',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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