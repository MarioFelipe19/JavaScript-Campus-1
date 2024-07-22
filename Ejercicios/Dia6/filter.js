function filter(numeros, multiplo) {
    let lista = []
    for (let i = 0; i < numeros.length; i++) {
        if (multiplo(numeros[i])) {
            lista.push(numeros[i])
        }
    }
    console.log(lista)
}

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
filter(numeros, multiploDe10) // [10, 40, 50]

