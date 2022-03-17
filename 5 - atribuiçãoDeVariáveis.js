console.log("Atribuição de Variáveis");

const idade = 24;
const primeiroNome = "Vitor"; //const são variáveis fixas
const sobrenome = "Alves";
let nomeCompleto; //let é uma variável mutável

console.log("idade: " , idade);
console.log(primeiroNome);
console.log(sobrenome);
console.log(primeiroNome + sobrenome);
console.log(primeiroNome , sobrenome);


console.log(`Meu nome é : ${primeiroNome} ${sobrenome}`);

nomeCompleto = primeiroNome + sobrenome;

console.log(nomeCompleto);