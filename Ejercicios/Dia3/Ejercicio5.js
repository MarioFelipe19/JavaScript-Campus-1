console.log("Buscar la palabra ingresada en la cadena guardada")

let regex = /perro/;
let texto = "Tengo un perro y un gato.";

let resultado = texto.search(regex);
console.log(resultado); // 9
