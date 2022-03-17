import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{

    constructor(cliente , agencia){
        super(0, cliente , agencia);
    }


    sacar(valor){
        let taxa = 1.01;
        this._sacar(valor, taxa);
    }
}