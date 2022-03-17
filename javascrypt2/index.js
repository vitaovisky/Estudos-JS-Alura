import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticador } from "./SistemaAutenticador.js";


const cliente1 = new Cliente("Ricardo", 11122233304);
const cliente2 = new Cliente("Alice", 22233344405);
const conta1 = new ContaCorrente(1001, 1111111, cliente1);
const conta2 = new ContaCorrente(1001, 2222222, cliente2);
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
const contaSalario1 = new ContaSalario (cliente1, 1001);

const diretor = new Diretor ("Roberto", 10000, 12345678900);
diretor.cadastrarSenha("123");
const gerente = new Gerente ("Richard", 5000, 12653479801);
gerente.cadastrarSenha("1234");

const gerLogado = SistemaAutenticador.login(diretor, "123");
const dirLogado = SistemaAutenticador.login(gerente, "123");


console.log(dirLogado);
console.log(gerLogado);
console.log(conta1);
console.log(conta2);

console.log(contaPoupanca1);
console.log(contaSalario1);

conta1.depositar(300);
conta1.sacar(100);
console.log("Numero de Contas correntes:", ContaCorrente.numeroDeContas);