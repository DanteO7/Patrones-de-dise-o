export interface Subscriptor {
  notificar(video: string): void;
}

export class SubscriptorMobile implements Subscriptor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  notificar(video: string): void {
    console.log(
      `📱 ${this.name} fue notificado del nuevo video ${video} desde celular`
    );
  }
}

export class SubscriptorWeb implements Subscriptor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  notificar(video: string): void {
    console.log(
      `💻 ${this.name} fue notificado del nuevo video ${video} desde la web`
    );
  }
}

export class Miembro implements Subscriptor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  notificar(video: string): void {
    console.log(
      `🪙 ${this.name} fue notificado del nuevo video ${video} antes de tiempo ya que es miembro`
    );
  }
}
