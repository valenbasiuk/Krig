// ============================================================
// Escudo - Clase que representa un escudo equipable
// ============================================================
// El escudo NO es una unidad de combate, es un ITEM que se le asigna
// a una unidad (Soldado, Tanque o Buque) para reducir el dano recibido.
//
// El porcentaje indica cuanto PASA el escudo.
//   - porcentaje = 0.5  → el escudo bloquea el 50%, pasa solo el 50% del dano
//   - porcentaje = 1.0  → sin reduccion, pasa el 100% del dano (escudo inutil)
//   - porcentaje = 0.0  → bloquea todo el dano (escudo perfecto)
// ============================================================

export class Escudo {

  // Nombre descriptivo del escudo, ej: "Escudo de titanio"
  nombre: string;

  // Porcentaje de dano que PASA a traves del escudo (entre 0.0 y 1.0)
  // Ejemplo: 0.5 significa que solo llega el 50% del dano
  porcentaje: number;

  // Constructor: recibe el nombre y el porcentaje de reduccion
  constructor(nombre: string, porcentaje: number) {
    // TODO: asignar nombre y porcentaje
    // TODO: validar que el porcentaje este entre 0 y 1
  }

  // Calcula cuanto dano pasa realmente despues de aplicar el escudo.
  // Ejemplo: calcularDano(100) con porcentaje 0.5 → retorna 50
  calcularDano(danoOriginal: number): number {
    // TODO: retornar danoOriginal * porcentaje
    throw new Error("Not implemented");
  }
}
