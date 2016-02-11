System.register(["angular2/core", './filterpanel', './datagrid', './tabnav', '../model/portfoliofiltermodel'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, filterpanel_1, datagrid_1, tabnav_1, portfoliofiltermodel_1;
    var Portfolio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (filterpanel_1_1) {
                filterpanel_1 = filterpanel_1_1;
            },
            function (datagrid_1_1) {
                datagrid_1 = datagrid_1_1;
            },
            function (tabnav_1_1) {
                tabnav_1 = tabnav_1_1;
            },
            function (portfoliofiltermodel_1_1) {
                portfoliofiltermodel_1 = portfoliofiltermodel_1_1;
            }],
        execute: function() {
            Portfolio = (function () {
                function Portfolio(filterdatamodel) {
                    var _this = this;
                    this.label = "somelabel";
                    var mandates = filterdatamodel.getAllMandates()
                        .subscribe(function (data) {
                        _this.mandatekeys = data;
                        console.log("mandatekeys   >> ", data);
                    });
                }
                Portfolio.prototype.clickme = function () {
                    /* console.log("label ", this.label);
                     console.log("reflect api ", Reflect.getOwnMetadataKeys(Portfolio));
                     console.log("metadata ", Reflect.getMetadata("propMetadata", Portfolio));
                     console.log("metadata ", Reflect.getMetadata("annotations", Portfolio));*/
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Portfolio.prototype, "label", void 0);
                Portfolio = __decorate([
                    core_1.Component({
                        template: "<div class=\"portfolio\">\n            <button (click)=\"clickme($event)\">clickme</button> Portfolio\n            <tabnav></tabnav>\n            <filterpanel [mandatekeys]=\"mandatekeys\"></filterpanel>\n            <datagrid></datagrid>\n            </div>",
                        directives: [filterpanel_1.Filterpanel, datagrid_1.DataGrid, tabnav_1.TabbedNavigation],
                        providers: [portfoliofiltermodel_1.PortfolioFilterModel]
                    }), 
                    __metadata('design:paramtypes', [portfoliofiltermodel_1.PortfolioFilterModel])
                ], Portfolio);
                return Portfolio;
            })();
            exports_1("Portfolio", Portfolio);
        }
    }
});
//# sourceMappingURL=portfolio.js.map