function map(numeros, duplicar) {
    let lista = []
    numeros.forEach(element => {
        lista.push(duplicar(element))
    });
    console.log(lista)
}

const numeros = [1, 2, 3]
const duplicar = x => x * 2
map(numeros, duplicar) // [2, 4, 6]