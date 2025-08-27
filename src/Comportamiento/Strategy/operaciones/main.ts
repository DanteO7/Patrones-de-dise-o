interface OperationStrategy {
  operar(a: number, b: number): number;
}

interface OperationContext {
  executeStrategy(a: number, b: number): number;
}

class Sumar implements OperationStrategy {
  public operar(a: number, b: number): number {
    return a + b;
  }
}

class Restar implements OperationStrategy {
  public operar(a: number, b: number): number {
    return a - b;
  }
}

class Multiplicar implements OperationStrategy {
  public operar(a: number, b: number): number {
    return a * b;
  }
}

class Operacion implements OperationContext {
  private strategy: OperationStrategy;

  constructor(strategy: OperationStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: OperationStrategy): void {
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

const mapOperations: Map<Strategies, () => Operacion> = new Map([
  [Strategies.Sumar, () => new Operacion(new Sumar())],
  [Strategies.Restar, () => new Operacion(new Restar())],
  [Strategies.Multiplicar, () => new Operacion(new Multiplicar())],
]);

const operacion = mapOperations.get(Strategies.Sumar);

if (operacion) console.log(operacion().executeStrategy(number1, number2));
