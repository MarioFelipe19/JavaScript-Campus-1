console.log("Buscar la palabra ingresada en la cadena guardada")

let regex = /(\d+)\s(\w+)/g;
let listaCompras = "Compré 10 manzanas y 5 naranjas";

let resultado = listaCompras.matchAll(regex);

for (let match of resultado) {
  console.log(match);
}
