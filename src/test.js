var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var C = (function () {
    /**
     * what is log doing? output
     *
     *
     * how is it doing
     * Compiler reads foo but before adding the foo direcly to C.prototype it rewrites foo or overwrites
     * foo so that log is taken care of. It redefines foo by :
     * var C = (function () {
            function C() {
            }
            C.prototype.foo = function (n) {
                return n * 2;
            };
            Object.defineProperty(C.prototype, "foo",
                __decorate([
                    log
                ], C.prototype, "foo", Object.getOwnPropertyDescriptor(C.prototype, "foo")));
            return C;
      })();
      NOTICE:
     * Object.defineProperty(C.prototype, "foo",
        __decorate([
            log
        ], C.prototype, "foo", Object.getOwnPropertyDescriptor(C.prototype, "foo")));
     *
     * Two ways defineProperty works data descriptor.
     * Object.defineProperty{object, "key", {value:"somevalue/function", configuarable:true, enumrable:true}};
     * other is accessordescriptor
     * Object.defineProperty{object, "key", {value:"somevalue/function", configuarable:true, enumrable:true}};
     * datadescriptor has value, writable are optional
     *  accessordescriptor has get, set are optional
     *
     *
     * __decorate is creating the descriptor object and the "value" will hold a new function which
     * will actually hold "log" definition. The log should take care of calling the foo as per its usage
     * value: function (...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args); // this is where the foo is called
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
        
        so techincall C.prototype.foo = the value above
        console.log(Object.getOwnPropertyDescriptor(C.prototype, "foo")) to see foo
        log(foo)
        In case of multiple decorator
        log2(log(foo))
        
        So decorator should not disturb the very nature of the function it is applied on but wrap it around
        its own to decorate with more stuff
     */
    function C(name) {
    }
    C.prototype.foo = function (n) {
        return n * 2;
    };
    __decorate([
        log2,
        log, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', void 0)
    ], C.prototype, "foo", null);
    C = __decorate([
        logClass, 
        __metadata('design:paramtypes', [String])
    ], C);
    return C;
})();
function log(target, key, value) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
}
function log2(target, key, value) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Log 2 Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
}
function logClass(target) {
    // save a reference to the original constructor
    var original = target;
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    // the new constructor behaviour
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log("New: " + original.name);
        return construct(original, args);
    };
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    // return new constructor (will override original)
    return f;
}
var c = new C();
var r = c.foo(23); //  "Call: foo(23) => 46"
console.log(r); // 46
//# sourceMappingURL=test.js.map