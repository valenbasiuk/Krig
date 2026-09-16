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
    // TODO: llamar a super() con nombre "Pistola 9mm" y municion inicial (ej: 15)
    // TODO: asignar danoPorDisparo (ej: 50)
  }

  // Implementacion del disparo de la pistola:
  // - Si tiene municion: descuenta 1 y retorna el dano
  // - Si no tiene municion: retorna 0
  disparar(): number {
    // TODO: verificar tieneMunicion()
    // TODO: si hay municion: municion-- y return danoPorDisparo
    // TODO: si no hay: return 0
    throw new Error("Not implemented");
  }
}
