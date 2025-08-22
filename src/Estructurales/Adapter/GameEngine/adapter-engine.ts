import { Engine } from "./engine";
import { Asset, NewFancyEngine } from "./new-engine";

export class AdapterEngine implements Engine {
  private newEngine: NewFancyEngine;

  public constructor(newEngine: NewFancyEngine) {
    this.newEngine = newEngine;
  }

  public init(width: number, height: number): void {
    const WorldConfig = {
      worldWidth: width,
      worldHeight: height,
    };
    this.newEngine.startWorld(WorldConfig);
  }

  public loadSprite(id: string, path: string): void {
    const asset: Asset = { id: id, url: path, kind: "image" };
    this.newEngine.addAsset(asset);
  }

  public clear(): void {
    this.newEngine.wipe();
  }

  public drawSprite(id: string, x: number, y: number): void {
    const request = { spriteId: id, position: { x: x, y: y } };
    this.newEngine.render(request);
  }

  public update(): void {
    this.newEngine.step();
  }
}
