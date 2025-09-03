import {
  addVectors,
  normalizeVector,
  Point,
  scaleVector,
  subtractVectors,
} from "../shared/types";
import { BehaviorStrategy, EnemyLike } from "./behavior-strategy";

export class Chase implements BehaviorStrategy {
  updateAI(enemy: EnemyLike, delta: number): Point {
    const toPlayer = subtractVectors(enemy.position, enemy.position);
    const direction = normalizeVector(toPlayer);
    // Un poco más rápido en “chase”
    return addVectors(
      enemy.position,
      scaleVector(direction, enemy.speed * 1.25 * delta)
    );
  }
}
