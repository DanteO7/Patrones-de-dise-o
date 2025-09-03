import { Point } from "../shared/types";

export type EnemyLike = {
  position: Point;
  speed: number;
};

export interface BehaviorStrategy {
  updateAI(enemy: EnemyLike, delta: number): Point;
}
