System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Filterpanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Filterpanel = (function () {
                function Filterpanel() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Filterpanel.prototype, "mandatekeys", void 0);
                Filterpanel = __decorate([
                    core_1.Component({
                        selector: "filterpanel",
                        template: "<div class=\"filterpanel\">Filterpanel\n  \n    <select name=\"select\">\n        <option *ngFor = \"#key of mandatekeys;\">{{key}}</option>\n        \n    </select>\n    <select name=\"select\">\n        <option value=\"value1\" selected>Account 1</option> \n        <option value=\"value2\" >Account 2</option>\n        <option value=\"value3\">Account 3</option>\n    </select>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Filterpanel);
                return Filterpanel;
            })();
            exports_1("Filterpanel", Filterpanel);
        }
    }
});
//# sourceMappingURL=filterpanel.js.map