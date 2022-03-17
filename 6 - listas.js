console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array (`Salvador`,`São Paulo`,`Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); //Adicionando mais elementos no meu array
listaDeDestinos.push(`Belo Horizonte`);

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log("Destinos possíveis menos um selecionado");
console.log(listaDeDestinos);
console.log("Destinos específicos:");
console.log(listaDeDestinos[1] , listaDeDestinos[0]);