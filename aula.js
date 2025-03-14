let nome = "Matheus";
console.log(nome);

const x = 10; // Number
const lista = [1, 2, 3, 4, 5]; // Array
const objeto = { name: "Matheus", age: 17 }; // JSON Object

console.log(x);
console.log(typeof x);
console.log(" ");
console.log(lista);
console.log(typeof lista);
console.log(lista[0]);
console.log(" ");
console.log(objeto);
console.log(typeof objeto);
console.log(objeto.name);
console.log(" ");

let opcao = true; // Boolean

// If Else
if (2 > 1){
    console.log("2 é maior que 1");
} else {
    console.log("2 não é maior que 1");
}

// Estrutura de repetição
// i = i + 1
const arr = ["amora", "banana", "caju", "damasco", "uva"];
for (let i = 0; i < arr.length; i++){
    // console.log("O valor de repetição é "+ arr[i]);
    // template literal, é o uso da crase
    console.log( `O valor de repetição é ${arr[i]}`);
}

// Função
function soma(){
    console.log(2 + 2);
};
console.log(" ");
soma();

function calcula(a, b){
    console.log(a * b);
};
calcula(12, 12);