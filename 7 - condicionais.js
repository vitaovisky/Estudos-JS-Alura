console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 18;
const estaAcompanhada = true;
const passagemComprada = true;


console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    listaDeDestinos.splice(1, 1); //removendo item
    console.log(listaDeDestinos);
    console.log("Boa Viagem!");
} else {
    console.log("Não posso vender para menores desacompanhados");
}

console.log("Embarque \n\n"); // \n serve para saltar uma linha

if (idadeComprador >=18 && passagemComprada == true){
    console.log("Boa Viagem");
}else{
    console.log("Embarque não permitido.");
}
