import { Arma } from "../armas/Arma";

export class Soldado {
    private arma?: Arma;
    private vida: number;

    constructor(vida: number = 100, arma?: Arma) {
        this.vida = vida;
        this.arma = arma;
    }

    disparar(objetivo?: Soldado): number {
        const dano = this.arma ? this.arma.disparar() : 10;
        if (objetivo) {
            objetivo.recibirDisparo(dano);
        }
        return dano;
    }

    recibirDisparo(dano: number): void {
        this.vida -= dano;
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}

export default Soldado;
