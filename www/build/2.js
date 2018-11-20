webpackJsonp([2],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_Cliente_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, ClienteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ClienteService = ClienteService;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ClienteService.findById(1)
            .subscribe(function (response) {
            _this.clientes = response;
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.abrirCadastro = function () {
        this.navCtrl.setRoot("MeuCadastroPage");
    };
    LoginPage.prototype.esqueciSenha = function () {
        this.alertAviso = 'se vira !!';
    };
    LoginPage.prototype.abrirTabs = function () {
        if (this.login == 'admin' && this.password == '123') {
            this.navCtrl.setRoot("PetshopsPage");
        }
        else {
            this.alertAviso = 'Senha ou Usuario Invalidos !';
        }
        /*
        if(this.login == this.clientes.email && this.password == '123'){
          this.navCtrl.setRoot("PetshopsPage");
        }else{
          this.alertAviso = 'Senha ou Usuario Invalidos !';
        }
        */
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\login\login.html"*/'<ion-content padding>\n    <div class="red">\n      <div class="logo">\n        <img src="/assets/imgs/0e98382e245122cce0cd4dc5c831e4cf.png" alt="">\n        <span><div class="titleipet">iPet</div></span>\n      </div>\n    \n      <ion-list no-lines>\n        <ion-item>\n          <ion-input type="text" placeholder="E-mail"[(ngModel)]="login"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Senha" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-list>\n    \n      <ion-grid>\n        <ion-row>\n          <button ion-button color="secondary" block round (click)="abrirTabs()">\n            Efetuar Login\n          </button>\n        </ion-row>\n        <ion-row>\n          <button ion-button block outline round color="secondary" (click)="abrirCadastro()">\n            Cadastrar-se\n          </button>\n        </ion-row>\n      </ion-grid>\n      <a style="color: rgba(5, 236, 75, 0.753); text-align: center;" (click)= "esqueciSenha()">Esqueci a senha ..</a>\n      <p style="text-align: center; color: rgb(255, 4, 4);">{{alertAviso}}</p>\n    </div>\n  \n  </ion-content>\n  \n  \n  '/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_Cliente_service__["a" /* ClienteService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.js.map