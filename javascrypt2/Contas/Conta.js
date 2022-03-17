//Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta){
            throw new Error("Você não pode referenciar esse tipo de conta diretamente");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error ("Esse método é abstrato e não pode ser chamado diretamente");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            console.log("Saque efetuado de: R$", valor, "Com taxa de:",  Math.trunc((taxa*100) -100), "%" , "Seu novo saldo é de: R$", this._saldo);
        }
        return 0;
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log("Deposito efetuado de: R$", valor, "Seu novo saldo é de: R$", this._saldo);
        }
    }

    transferir(valor, conta){
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}