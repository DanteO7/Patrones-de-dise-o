var Singleton = /** @class */ (function () {
    function Singleton() {
        this.hisorial = [];
    }
    Object.defineProperty(Singleton, "getInstance", {
        get: function () {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        },
        enumerable: false,
        configurable: true
    });
    Singleton.prototype.log = function (mensaje) {
        this.hisorial.push(mensaje);
    };
    Singleton.prototype.mostrarHistorial = function () {
        console.log(this.hisorial);
    };
    return Singleton;
}());
function clientCode() {
    var instancia1 = Singleton.getInstance;
    var instancia2 = Singleton.getInstance;
    instancia1.log("Hola");
    instancia2.log("Mundo");
    instancia1.mostrarHistorial();
}
clientCode();
