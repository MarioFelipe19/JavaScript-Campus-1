console.log("Buscar la palabra ingresada en la cadena guardada y dar como resulatodo false o true")

let regex = /aprobado/; // esta linea busca la palabra aprobado en la cadena.
let mensaje = "El estudiante ha aprobado el examen.";// esta linea guarda la cadena en una variable mensaje.

let resultado = regex.test(mensaje);// esta linea busca si la palabra ingresada esta en la cadena y devuelve true si es asi.
console.log(resultado)// esta linea imprime el resultado. 
