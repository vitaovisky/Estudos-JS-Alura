import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(agencia, conta, cliente){
        super(0, cliente, agencia);
        this._conta = conta;
        ContaCorrente.numeroDeContas ++;
    }

    sacar(valor){
        let taxa = 1.1;
        this._sacar(valor, taxa);
    }
        
}