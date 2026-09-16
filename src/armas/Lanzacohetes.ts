// ============================================================
// Lanzacohetes - Arma pesada, poca municion pero dano muy alto
// ============================================================
// El arma mas poderosa del juego. Tiene muy pocos disparos
// pero cada uno hace mucho dano.
// Ejemplo de valores sugeridos: 5 cohetes, 300 de dano por disparo.
// ============================================================

import { Arma } from "./Arma";

export class Lanzacohetes extends Arma {

  private danoPorDisparo: number;

  constructor() {
    super("Lanzacohetes RPG", 5);
    this.danoPorDisparo = 300;
  }

  disparar(): number {
    if (this.tieneMunicion()) {
      this.municion--;
      console.log(`Disparo con Lanzacohetes! municion restante: ${this.municion}`);
      return this.danoPorDisparo;
    }
    console.log("No quedan balas.");
    return 0;
  }
}
