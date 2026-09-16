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
    // TODO: super() con nombre "Lanzacohetes RPG" y municion (ej: 5)
    // TODO: asignar danoPorDisparo (ej: 300)
  }

  disparar(): number {
    // TODO: misma logica que las otras armas
    throw new Error("Not implemented");
  }
}
