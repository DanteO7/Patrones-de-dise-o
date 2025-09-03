import { Point } from "./shared/types";
import { BehaviorStrategy, EnemyLike } from "./strategies/behavior-strategy";

export class Enemy implements EnemyLike {
  position: Point = { x: 80, y: 60 };
  speed: number = 30;
  private strategy: BehaviorStrategy;

  constructor(strategy: BehaviorStrategy) {
    this.strategy = strategy;
  }

  setStrategy(str: BehaviorStrategy) {
    this.strategy = str;
  }

  updateAI() {
    this.strategy.updateAI(this, 0.3);
  }
}
