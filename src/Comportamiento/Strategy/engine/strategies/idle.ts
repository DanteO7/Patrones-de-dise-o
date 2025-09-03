import { BehaviorContext, BehaviorStrategy } from "./behavior-strategy";

export class Idle implements BehaviorStrategy {
  updateAI(context: BehaviorContext): void {
    context.getPosition();
  }
}
