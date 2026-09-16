// ============================================================
// Pistola - Arma de corto alcance con poca municion y dano bajo
// ============================================================
// Hereda de Arma e implementa disparar() con su propio dano base.
// Ejemplo de valores sugeridos: 15 balas, 50 de dano por disparo.
// (Vos elegis los valores que te parezcan balanceados)
// ============================================================

import { Arma } from "./Arma";

export class Pistola extends Arma {

  // El dano fijo que hace cada disparo de esta pistola
  private danoPorDisparo: number;

  // Constructor: inicializa con valores por defecto o los que se pasen
  constructor() {
    super("Pistola 9mm", 15);
    this.danoPorDisparo = 50;
  }

  // Implementacion del disparo de la pistola:
  // - Si tiene municion: descuenta 1 y retorna el dano
  // - Si no tiene municion: retorna 0
  disparar(): number {
    if (this.tieneMunicion()) {
      this.municion--;
      console.log(`Disparo con Pistola! municion restante: ${this.municion}`);
      return this.danoPorDisparo;
    }
    console.log("No quedan balas.");
    return 0;
  }
}
