import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(valor, cliente, agencia){
        super(valor, cliente, agencia);
    }

    sacar(valor){
        let taxa = 1;
        this._sacar(valor, taxa);
    }


}