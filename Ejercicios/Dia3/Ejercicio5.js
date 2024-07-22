console.log("Buscar el indice sobre la primera coincidencia y imprimirlo")

let regex = /perro/; // esta liena se guarda la pabra a buscar en la bariable.
let texto = "Tengo un perro y un gato.";// esta linea se ingresa la cadena a la que se le buscara la coincidencia.

let resultado = texto.search(regex);// esta liea devuelve el indice de la coincidencia con el metodo  search.
console.log(resultado); // esta lienea imprime el indeice de la coincidencia.
