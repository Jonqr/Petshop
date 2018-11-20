webpackJsonp([3],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */]),
            ],
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());

//# sourceMappingURL=agenda.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_AgendaFuncionario_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams, AgendaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AgendaService = AgendaService;
        this.petshop = this.navParams.get('petshop');
        this.petEscolhido = this.navParams.get('pet');
        this.servicoEscolhido = this.navParams.get('servico');
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.AgendaService.findAll() // buscando um cliente padrão para simula~ção
            .subscribe(function (response) {
            _this.Agenda = response;
            _this.Calendario = _this.Agenda;
        }, function (error) {
            console.log(error);
        });
    };
    AgendaPage.prototype.separaDataAPI = function () {
    };
    AgendaPage.prototype.buscar = function () {
        var agendamento = [];
        var dia, mes, ano, hora;
        //for (let i = 0; i < this.Agenda.length; i++) {
        var date;
        for (var i = 0; i < this.Agenda.length; i++) {
            date = this.Agenda[i].Data;
            var aux = date.split(/(\s+)/).filter(function (val) { return val.trim().length > 0; });
            var ax = aux[0].split('/').map(function (val) { return +val; });
            if (this.dia == ax[0] && this.mes == ax[1]) {
                agendamento.push(this.Agenda[i]);
            }
        }
        this.Calendario = agendamento;
    };
    AgendaPage.prototype.separaDataInicial = function () {
        var ano;
        var data = this.dataInicial.split('-').map(function (val) { return +val; });
        this.dia = data[2];
        this.mes = data[1];
        ano = data[0];
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\agenda\agenda.html"*/'<!--\n  Generated template for the AgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agenda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n  <!--SELEÇÃO AGENDA-->\n  <div class="agenda">\n        <div>\n            <h4 style="text-align: center;">Selecione uma data</h4>\n        </div>\n        <ion-item >\n          <h4 style="text-align: center;">Selecione uma data</h4>\n          <ion-label style="text-align: center;">Escolha um dia ou mês</ion-label>\n        <ion-datetime displayFormat="DD/MMMM/YYYY" [(ngModel)]="dataInicial"\n        (ngModelChange)="separaDataInicial()"\n        monthNames= "janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro"\n        doneText="Selecionar"\n        cancelText="Cancelar" \n        [min]="maxDate">\n        </ion-datetime>\n        </ion-item>  \n  </div><br>\n  <div><button ion-button block (click)="buscar()">Buscar</button></div>\n  \n  <p>Teste : {{today}}</p>\n  \n  <br><br>\n  <ion-list >\n    <ion-item *ngFor="let item of Calendario " >\n      {{item.Data}}\n    </ion-item>\n  </ion-list>\n  <!--<div class="grid-agenda ocupado"> <h2>8:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>9:00 </h2> </div>\n  <div class="grid-agenda disponivel"> <h2>10:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>11:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>12:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>13:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>14:00</h2>  </div>\n  <div class="grid-agenda disponivel"><h2> 15:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>16:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>17:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>18:00</h2>  </div>-->\n<!--\n\n  <ion-grid>\n  <ion-row>\n    <ion-col  col-6> <div class="grid-agenda disponivel"> <h2>8:00</h2>  </div></ion-col>\n    <ion-col  col-6><div class="grid-agenda ocupado"> <h2>9:00</h2>  </div> </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>10:00</h2>  </div> </ion-col>\n    <ion-col col-6> <div class="grid-agenda disponivel"> <h2>11:00</h2>  </div></ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>12:00</h2>  </div></ion-col>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>13:00</h2>  </div> </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>14:00</h2>  </div> </ion-col>\n    <ion-col col-6> <div class="grid-agenda disponivel"> <h2>15:00</h2>  </div></ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6> <div class="grid-agenda disponivel"> <h2>16:00</h2>  </div></ion-col>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>17:00</h2>  </div> </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>18:00</h2>  </div> </ion-col>\n    <ion-col col-6> <div class="grid-agenda disponivel"> <h2>18:00</h2>  </div></ion-col>\n  </ion-row>\n</ion-grid>\n\n-->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic-master\src\pages\agenda\agenda.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_domain_AgendaFuncionario_service__["a" /* AgendaFuncionarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_domain_AgendaFuncionario_service__["a" /* AgendaFuncionarioService */]) === "function" && _c || Object])
    ], AgendaPage);
    return AgendaPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=agenda.js.map

/***/ })

});
//# sourceMappingURL=3.js.map