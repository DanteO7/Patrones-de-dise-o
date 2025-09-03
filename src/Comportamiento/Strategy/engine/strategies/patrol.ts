import {
  addVectors,
  normalizeVector,
  Point,
  scaleVector,
  subtractVectors,
  vectorLength,
} from "../shared/types";
import { BehaviorStrategy, EnemyLike } from "./behavior-strategy";

export class Patrol implements BehaviorStrategy {
  private readonly patrolWaypoints: Point[] = [
    { x: 20, y: 20 },
    { x: 120, y: 20 },
    { x: 120, y: 90 },
    { x: 20, y: 90 },
  ];
  private currentWaypointIndex = 0;

  updateAI(enemy: EnemyLike, delta: number): Point {
    const target = this.patrolWaypoints[this.currentWaypointIndex];
    const toTarget = subtractVectors(target, enemy.position);
    const direction = normalizeVector(toTarget);
    const step = scaleVector(direction, enemy.speed * delta);
    const candidate = addVectors(enemy.position, step);

    // ¿Llegamos al waypoint?
    if (vectorLength(toTarget) < 1.5) {
      this.currentWaypointIndex =
        (this.currentWaypointIndex + 1) % this.patrolWaypoints.length;
    }

    return candidate;
  }
}
