console.log("Buscar la fecha en la cadena La fecha de hoy es 19-07-2024 para que lo devuelva en formato arreglo")

let regex = /(\d{2})-(\d{2})-(\d{4})/; // esta linea busca la fecha segun el formato establecido 
let fecha = "La fecha de hoy es 19-07-2024";// esta liena contiene la cadena con la fecha 

let resultado = regex.exec(fecha);// esta linea busca en la cadena y develve un arreglo con la fecha encontrada 
console.log(resultado);// esta liena imprime el arreglo 