System.register(["angular2/core", './filterpanel', './datagrid'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, filterpanel_1, datagrid_1;
    var Transactions;
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
            }],
        execute: function() {
            Transactions = (function () {
                function Transactions() {
                }
                Transactions = __decorate([
                    core_1.Component({
                        template: "<div class=\"portfolio\">Transactions<tabnav></tabnav><filterpanel></filterpanel><datagrid></datagrid></div>",
                        directives: [filterpanel_1.Filterpanel, datagrid_1.DataGrid]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Transactions);
                return Transactions;
            })();
            exports_1("Transactions", Transactions);
        }
    }
});
//# sourceMappingURL=transaction.js.map