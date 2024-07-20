console.log("Buscar el patron de coincidencia en una cadena dada")

let regex = /(\d+)\s(\w+)/g; // esta linea busca los patrones de un numero despues de una palabra
let listaCompras = "Compré 10 manzanas y 5 naranjas"; // esta linea contiene la cadena a la que se le buscara los patrones 

let resultado = listaCompras.matchAll(regex);// esta linea devuelve un arreglo  con los patrones de la cadena ingrasada 

for (let match of resultado) { // esta liena tiene un bucle for el cual  recorre y itera sobre las coincidencias para imprimirlas 
  console.log(match);
}
