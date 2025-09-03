import {
  Miembro,
  Subscriptor,
  SubscriptorMobile,
  SubscriptorWeb,
} from "./subscriptor";

class CanalYouTube {
  private name: string;
  private suscriptores: Subscriptor[] = [];

  constructor(name: string) {
    this.name = name;
  }

  agregarSuscriptor(sub: Subscriptor) {
    this.suscriptores.push(sub);
  }

  subirVideo(titulo: string) {
    console.log(`📹 Canal ${this.name} subió: ${titulo}`);

    for (const sub of this.suscriptores) {
      sub.notificar(titulo);
    }
  }
}

// uso:
const canal = new CanalYouTube("Baity");

const subMobile = new SubscriptorMobile("Juan");
canal.agregarSuscriptor(subMobile);

const subWeb = new SubscriptorWeb("Lucia");
canal.agregarSuscriptor(subWeb);

const miembro = new Miembro("Pedro");
canal.agregarSuscriptor(miembro);

canal.subirVideo("Mañana sale Silksong");
