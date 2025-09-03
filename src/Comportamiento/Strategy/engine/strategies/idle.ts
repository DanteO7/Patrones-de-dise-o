import { Point } from "../shared/types";
import { BehaviorStrategy, EnemyLike } from "./behavior-strategy";

export class Idle implements BehaviorStrategy {
  updateAI(enemy: EnemyLike): Point {
    return enemy.position;
  }
}
