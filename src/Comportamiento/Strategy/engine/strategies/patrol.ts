import {
  addVectors,
  normalizeVector,
  scaleVector,
  subtractVectors,
  vectorLength,
} from "../../current/shared/types";
import { BehaviorContext, BehaviorStrategy } from "./behavior-strategy";

export class Patrol implements BehaviorStrategy {
  updateAI(context: BehaviorContext): void {
    let currentWaypointIndex = 0;
    const target = context.getPatrolWaypoints()[currentWaypointIndex];
    const toTarget = subtractVectors(target, context.getPosition());
    const direction = normalizeVector(toTarget);
    const step = scaleVector(direction, 30 * context.dt);
    const candidate = addVectors(context.getPosition(), step);

    // ¿Llegamos al waypoint?
    if (vectorLength(toTarget) < 1.5) {
      currentWaypointIndex =
        (currentWaypointIndex + 1) % context.getPatrolWaypoints().length;
    }

    return candidate;
  }
}
