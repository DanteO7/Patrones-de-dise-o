import { Engine } from "./engine";
import { NewFancyEngine } from "./new-engine";

export class AdapterEngine implements Engine {
  private newEngine: NewFancyEngine;

  public constructor(newEngine: NewFancyEngine) {
    this.newEngine = newEngine;
  }

  public init(width: number, height: number): void {
    this.newEngine.startWorld({
      worldWidth: width,
      worldHeight: height,
    });
  }

  public loadSprite(id: string, path: string): void {
    this.newEngine.addAsset({ id: id, url: path, kind: "image" });
  }

  public clear(): void {
    this.newEngine.wipe();
  }

  public drawSprite(id: string, x: number, y: number): void {
    this.newEngine.render({ spriteId: id, position: { x: x, y: y } });
  }

  public update(): void {
    this.newEngine.step();
  }
}
