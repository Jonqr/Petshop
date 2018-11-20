webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetshopsPageModule", function() { return PetshopsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__petshops__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PetshopsPageModule = /** @class */ (function () {
    function PetshopsPageModule() {
    }
    PetshopsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */]),
            ],
        })
    ], PetshopsPageModule);
    return PetshopsPageModule;
}());

//# sourceMappingURL=petshops.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetshopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var geocoder;
var address = "av capivari 1324 porto alegre rs";
var PetshopsPage = /** @class */ (function () {
    function PetshopsPage(navCtrl, navParams, geolocation, petshopService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.petshopService = petshopService;
        this.addres = [];
    }
    // função chamando o serviço que consome api
    PetshopsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.petshopService.findAll()
            .subscribe(function (response) {
            _this.items = response;
            _this.addmark();
        }, function (error) {
            console.log(error);
        });
    };
    PetshopsPage.prototype.infoPet = function (value) {
        this.catPet = value;
    };
    PetshopsPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                //if(item.funcionario == undefined )
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.funcionarios.some(function (g) { return g.tipoServico.some(function (t) { return t.description.toLowerCase().indexOf(val.toLowerCase()) > -1 && t.tipoanimal.some(function (ta) { return ta.id === _this.catPet; }); }); }));
            });
        }
        else {
            this.ionViewDidLoad();
        }
    };
    PetshopsPage.prototype.pageservice = function (petshop) {
        this.navCtrl.push('ServicoPetPage', {
            id: petshop
        });
    };
    //api google maps
    PetshopsPage.prototype.addmark = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            var position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                zoom: 15,
                center: position
            };
            _this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: position,
                map: _this.map,
            });
            _this.codeAddress(_this.map);
        }).catch(function (error) {
            console.log('Erro ao recuperar sua posição', error);
        });
    };
    PetshopsPage.prototype.codeAddress = function (map) {
        for (var x = 0; x < this.items.length; x++) {
            this.addres.push(this.items[x].endereco);
        }
        geocoder = new google.maps.Geocoder();
        for (var _i = 0, _a = this.addres; _i < _a.length; _i++) {
            var item = _a[_i];
            geocoder.geocode({ 'address': item.logradouro + " " + item.numero + " " + item.cep + " RS " }, function (results, status) {
                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
    };
    PetshopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-petshops',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\petshops\petshops.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Petshops</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="centro">\n    <img src="../../assets/icon/cat.png" class="efect" id="cat" (click)="infoPet(2)" >\n    <img src="../../assets/icon/dog.png" class="efect"  id="dog" (click)="infoPet(1)" >\n\n  </div>\n  \n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  \n  <button (click)="pageservice(item.id)" ion-item *ngFor="let item of items"  >\n    <ion-thumbnail item-start>\n      <img src="../../assets/imgs/pt.png">\n    </ion-thumbnail>\n    <h2>{{item.nome}}</h2>\n    <p> {{item.endereco.logradouro}} {{item.endereco.numero}}</p>\n\n  </button>\n\n</ion-list>\n\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\petshops\petshops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */]])
    ], PetshopsPage);
    return PetshopsPage;
}());

//# sourceMappingURL=petshops.js.map

/***/ })

});
//# sourceMappingURL=1.js.map