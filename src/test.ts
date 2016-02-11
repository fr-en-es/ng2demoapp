
@logClass
class C {
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
    
    constructor(name:string)
    {
        
    }
    
    @log2
    @log
    foo(n: number) {
        return n * 2;
    }
    
    
    /**
     * In case of property descriptior
     * the decorator function should redefine property with accessordescriptor and in its get and set definition
     * do what needs to be decorated
     * function logProperty(target: any, key: string) {

  // property value
  var _val = this[key];

  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };

  // Delete property.
  if (delete this[key]) {

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
     * 
     * 
     */
}

function log(target: Function, key: string, value: any) {
    return {
        value: function (...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    };
}

function log2(target: Function, key: string, value: any) {
    return {
        value: function (...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Log 2 Call: ${key}(${a}) => ${r}`);
            return result;
        }
    };
}
function logClass(target: any) {

  // save a reference to the original constructor
  var original = target;

  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  // the new constructor behaviour
  var f : any = function (...args) {
    console.log("New: " + original.name); 
    return construct(original, args);
  }

  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;

  // return new constructor (will override original)
  return f;
}


var c = new C();
var r = c.foo(23); //  "Call: foo(23) => 46"
console.log(r);    // 46