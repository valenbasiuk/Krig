// ============================================================
// Arma - Clase abstracta base para todas las armas
// ============================================================
// Define la estructura comun de cualquier arma del juego.
// Todas las armas tienen municion y hacen dano, pero cada tipo
// de arma define CUANTO dano hace y cuantas municiones tiene.
//
// Es abstracta porque no queremos instanciar un "Arma" generico,
// siempre se usa un tipo concreto: Pistola, Rifle, Lanzacohetes, etc.
// ============================================================

export abstract class Arma {

  // Nombre del arma, ej: "Pistola 9mm", "Rifle de asalto"
  nombre: string;

  // Cantidad de municiones disponibles
  // Cuando llega a 0, el arma no puede disparar mas
  municion: number;

  // Constructor base: recibe el nombre y la municion inicial
  constructor(nombre: string, municion: number) {
    this.nombre = nombre;
    this.municion = municion;
  }

  // Retorna true si todavia hay municion disponible, false si se acabo
  tieneMunicion(): boolean {
    return this.municion > 0;
  }

  // Intenta disparar: descuenta una municion y retorna el da;o causado.
  // en caso de que no haya municion, retorna 0 (el arma no hace nada)
  // es abstracto porque cada arma define su propio da;o base.
  abstract disparar(): number;
}
