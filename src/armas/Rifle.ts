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
    // TODO: super() con nombre "Rifle de asalto" y municion (ej: 30)
    // TODO: asignar danoPorDisparo (ej: 100)
  }

  disparar(): number {
    // TODO: misma logica que Pistola pero con los valores del Rifle
    throw new Error("Not implemented");
  }
}
