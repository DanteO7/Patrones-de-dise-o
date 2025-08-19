class Singleton {
  private static instance: Singleton;
  private hisorial: Array<string> = [];

  private constructor() {}

  public static get getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public log(mensaje: string): void {
    this.hisorial.push(mensaje);
  }

  public mostrarHistorial(): void {
    console.log(this.hisorial);
  }
}

function clientCode() {
  const instancia1 = Singleton.getInstance;
  const instancia2 = Singleton.getInstance;

  instancia1.log("Hola");
  instancia2.log("Mundo");

  instancia1.mostrarHistorial();
}

clientCode();
