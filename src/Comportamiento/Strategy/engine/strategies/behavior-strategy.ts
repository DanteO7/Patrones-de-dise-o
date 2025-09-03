import { Point } from "../../current/shared/types";

export interface BehaviorContext {
  getPosition(): Point;
  getPatrolWaypoints(): Point[];
  getPlayerPosition(): Point;
}

export interface BehaviorStrategy {
  updateAI(context: BehaviorContext): void;
}
