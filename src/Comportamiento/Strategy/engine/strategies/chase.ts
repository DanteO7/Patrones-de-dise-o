import {
  addVectors,
  normalizeVector,
  scaleVector,
  subtractVectors,
} from "../../current/shared/types";
import { BehaviorContext, BehaviorStrategy } from "./behavior-strategy";

export class Chase implements BehaviorStrategy {
  updateAI(context: BehaviorContext): void {
    const playerPosition = context.getPlayerPosition();
    const toPlayer = subtractVectors(playerPosition, context.getPosition());
    const direction = normalizeVector(toPlayer);
    // Un poco más rápido en “chase”
    return addVectors(
      context.getPosition(),
      scaleVector(direction, 30 * 1.25 * context.dt)
    );
  }
}
