import { Point } from "../current/shared/types";
import {
  BehaviorContext,
  BehaviorStrategy,
} from "./strategies/behavior-strategy";

export class Enemy implements BehaviorContext {
  private position: Point = { x: 80, y: 60 };
  private strategy: BehaviorStrategy;

  constructor(
    strategy: BehaviorStrategy,
    private readonly getPlayerPos: () => Point
  ) {
    this.strategy = strategy;
  }
  getPlayerPosition(): Point {
    return this.getPlayerPos();
  }
  getPatrolWaypoints(): Point[] {
    return [
      { x: 20, y: 20 },
      { x: 120, y: 20 },
      { x: 120, y: 90 },
      { x: 20, y: 90 },
    ];
  }

  getPosition(): Point {
    return this.position;
  }

  setStrategy(str: BehaviorStrategy) {
    this.strategy = str;
  }

  updateAI() {
    this.strategy.updateAI(this);
  }
}
