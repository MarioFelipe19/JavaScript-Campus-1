console.log("Buscar la palabras de 3 letra en la cadena ingresada")

let regex = /\b\w{3}\b/g;// en esta liena se busca las palabras de 3 letra con el regex {3} , \b es para dar un borde a la letra.
let texto = "Cada día leo un libro con una nueva palabra";// esta liena ingresa la cadena en la variable texto

let resultado = texto.match(regex);// esta liena devuelve un arreglo con las palabras de 3 letras.
console.log(resultado); // esta linea imprime el arreglo. 
