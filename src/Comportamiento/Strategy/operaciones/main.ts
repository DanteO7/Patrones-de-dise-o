interface Strategy {
  operar(a: number, b: number): number;
}

class Sumar implements Strategy {
  public operar(a: number, b: number): number {
    return a + b;
  }
}

class Restar implements Strategy {
  public operar(a: number, b: number): number {
    return a - b;
  }
}

class Multiplicar implements Strategy {
  public operar(a: number, b: number): number {
    return a * b;
  }
}

class Contexto {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public executeStrategy(a: number, b: number): number {
    return this.strategy.operar(a, b);
  }
}

const number1 = 7;
const number2 = 4;

enum Strategies {
  Sumar = "Sumar",
  Restar = "Restar",
  Multiplicar = "Multiplicar",
}

const mapStrategies: Map<Strategies, () => Contexto> = new Map([
  [Strategies.Sumar, () => new Contexto(new Sumar())],
  [Strategies.Restar, () => new Contexto(new Restar())],
  [Strategies.Multiplicar, () => new Contexto(new Multiplicar())],
]);

const operacion = mapStrategies.get(Strategies.Multiplicar);

if (operacion) console.log(operacion().executeStrategy(number1, number2));
