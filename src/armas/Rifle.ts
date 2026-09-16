// ============================================================
// Rifle - Arma de largo alcance con mas municion y dano medio
// ============================================================
// Similar a la Pistola pero con mas municion y mayor dano.
// Ejemplo de valores sugeridos: 30 balas, 100 de dano por disparo.
// (Vos definís los valores según como quieras balancear el juego)
// ============================================================

import { Arma } from "./Arma";

export class Rifle extends Arma {

  private danoPorDisparo: number;

  constructor() {
    super("Rifle de asalto", 30);
    this.danoPorDisparo = 100;
  }

  disparar(): number {
    if (this.tieneMunicion()) {
      this.municion--;
      console.log(`Disparo con Rifle! municion restante: ${this.municion}`);
      return this.danoPorDisparo;
    }
    console.log("No quedan balas.");
    return 0;
  }
}
