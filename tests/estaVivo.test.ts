import Soldado from "../src/clases/Soldado";
import { Pistola } from "../src/armas/Pistola";

test("s2 esta vivo despues de que s1 le dispara", () => {
    let s1 = new Soldado(100, new Pistola());
    let s2 = new Soldado(100, new Pistola());
    s1.disparar(s2);
    expect(s2.estaVivo()).toBe(true);
});
