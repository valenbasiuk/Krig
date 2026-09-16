// ============================================================
// Armas.test.ts - Tests unitarios para las clases de armas
// ============================================================
// Testea la logica de municion y dano de Pistola, Rifle y Lanzacohetes.
// ============================================================

import { Pistola } from "../src/armas/Pistola";
import { Rifle } from "../src/armas/Rifle";
import { Lanzacohetes } from "../src/armas/Lanzacohetes";

describe("Pistola", () => {

  test("la pistola tiene municion al inicio", () => {
    // TODO: tieneMunicion() === true
  });

  test("cada disparo descuenta una municion", () => {
    // TODO: disparar() varias veces y verificar que la municion baja
  });

  test("sin municion, disparar() retorna 0", () => {
    // TODO: agotar todas las municiones
    // TODO: el proximo disparo debe retornar 0
  });
});

describe("Rifle", () => {
  test("el rifle tiene mas municion que la pistola", () => {
    // TODO: verificar que Rifle tiene mas municion inicial que Pistola
  });
});

describe("Lanzacohetes", () => {
  test("el lanzacohetes hace mas dano que el rifle", () => {
    // TODO: comparar el dano de un disparo de Lanzacohetes vs Rifle
  });
});
