System.register(['angular2/core', '../service/portfoliodataservice', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, portfoliodataservice_1;
    var PortfolioFilterModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (portfoliodataservice_1_1) {
                portfoliodataservice_1 = portfoliodataservice_1_1;
            },
            function (_1) {}],
        execute: function() {
            PortfolioFilterModel = (function () {
                function PortfolioFilterModel(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    this.getAllMandates = function () {
                        //process filterdata and get mandates
                        _this.portfoliodata = _this.dataService.fetch()
                            .map(function (obj) {
                            return obj["accountinfo"].map(function (o) { return o["mandatekey"]; });
                        });
                        //.subscribe( (data)=> console.log("mandatekey   >> ", data))
                        console.log("this.portfoliodata  ", _this.portfoliodata);
                        return _this.portfoliodata;
                    };
                }
                PortfolioFilterModel = __decorate([
                    __param(0, core_1.Inject(portfoliodataservice_1.PortfolioDataService)), 
                    __metadata('design:paramtypes', [Object])
                ], PortfolioFilterModel);
                return PortfolioFilterModel;
            })();
            exports_1("PortfolioFilterModel", PortfolioFilterModel);
        }
    }
});
//# sourceMappingURL=portfoliofiltermodel.js.map