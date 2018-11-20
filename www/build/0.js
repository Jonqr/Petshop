webpackJsonp([0],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoPetPageModule", function() { return ServicoPetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servico_pet__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicoPetPageModule = /** @class */ (function () {
    function ServicoPetPageModule() {
    }
    ServicoPetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__servico_pet__["a" /* ServicoPetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__servico_pet__["a" /* ServicoPetPage */]),
            ],
        })
    ], ServicoPetPageModule);
    return ServicoPetPageModule;
}());

//# sourceMappingURL=servico-pet.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_Cliente_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_Funcionario_service__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ServicoPetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicoPetPage = /** @class */ (function () {
    function ServicoPetPage(navCtrl, navParams, PetshopService, CienteService, FuncionarioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PetshopService = PetshopService;
        this.CienteService = CienteService;
        this.FuncionarioService = FuncionarioService;
        this.id = this.navParams.get('id');
    }
    ServicoPetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.CienteService.findById(1) // buscando um cliente padrão para simula~ção
            .subscribe(function (response) {
            _this.cliente = response;
            _this.animais = _this.cliente.animais;
            _this.nomecliente = _this.cliente.nome;
            _this.ionViewDidLoadbkp();
        }, function (error) {
            console.log(error);
        });
    };
    ServicoPetPage.prototype.ChoosePet = function (pet) {
        this.petEscolhido = pet;
        this.getTipoServico();
    };
    ServicoPetPage.prototype.ionViewDidLoadbkp = function () {
        var _this = this;
        this.PetshopService.findById(this.id)
            .subscribe(function (response) {
            _this.petshop = response;
        }, function (error) {
            console.log(error);
        });
    };
    ServicoPetPage.prototype.mcqAnswer = function (animalEscolhido) {
        var animalid = animalEscolhido;
    };
    ServicoPetPage.prototype.pageservice = function () {
        this.navCtrl.push('AgendaPage', {
            servico: this.servicoEscolhido,
            pet: this.petEscolhido
        });
    };
    ServicoPetPage.prototype.ChooseService = function (Servico) {
        this.servicoEscolhido = Servico;
        this.pageservice();
    };
    ServicoPetPage.prototype.getTipoServico = function () {
        var _this = this;
        var DescriptionServico = [];
        var idTipoServico = [];
        for (var i = 0; i < this.petshop.funcionarios.length; i++) {
            for (var a = 0; a < this.petshop.funcionarios[i].tipoServico.length; a++) {
                DescriptionServico.push(this.petshop.funcionarios[i].tipoServico[a]);
            }
        }
        this.tipoServicos = DescriptionServico;
        this.tipoServicos = this.tipoServicos.filter(function (item) {
            //if(item.funcionario == undefined )
            return (item.tipoanimal.some(function (g) { return g.id == _this.petEscolhido.tipoAnimal.id; }));
        });
    };
    ServicoPetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-servico-pet',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\servico-pet\servico-pet.html"*/'<!--\n  Generated template for the ServicoPetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Servicos</ion-title>\n  </ion-navbar>\n \n</ion-header>\n  \n<ion-content padding>\n <ion-item class="centralizar">\n   <ion-label >{{nomecliente}}</ion-label>\n</ion-item>\n  <ion-card-header class="centralizar">\n    Escolha seu pet\n  </ion-card-header>\n<ion-list>\n  <button (click)="ChoosePet(item)" ion-item *ngFor="let item of animais"  >\n    <ion-thumbnail item-start>\n    </ion-thumbnail>\n    <h2>{{item.nome}}</h2>   <p>{{item.tipoAnimal.tipo}}</p>\n\n  </button>\n  <ion-card-header class="centralizar">\n    escolha o servico\n  </ion-card-header>\n  <button ion-item (click)="ChooseService(item)" *ngFor="let item of tipoServicos"  >\n    <ion-thumbnail item-start>\n      <img src="../../assets/imgs/pt.png">\n    </ion-thumbnail>\n    <h2>{{item.description}}</h2>\n  </button>\n\n </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\servico-pet\servico-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_Cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_Funcionario_service__["a" /* FuncionarioService */]])
    ], ServicoPetPage);
    return ServicoPetPage;
}());

//# sourceMappingURL=servico-pet.js.map

/***/ })

});
//# sourceMappingURL=0.js.map