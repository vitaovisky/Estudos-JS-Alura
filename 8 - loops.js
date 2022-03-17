console.log("\n Trabalhando com Loops");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 18;
const estaAcompanhada = true;
const passagemComprada = true;
const destinoViagem = 'São Paulo';


console.log("Destinos Possíveis:");
console.log(listaDeDestinos);
console.log("\n");
const podeEmbarcar = (idadeComprador >= 18 || estaAcompanhada == true) 

let contador = 0;
let destinoExiste = false;

while(contador<3){

    if(destinoViagem==listaDeDestinos[contador]){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

if(destinoExiste==true && podeEmbarcar){
    console.log("Destino existe");
    console.log("Passagem comprada");
    console.log("Boa viagem");
}else{
    console.log("Desculpe, tivemos um erro");
}