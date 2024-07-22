function find(numeros, multiploDe10) {
    for (let i = 0; i < numeros.length; i++) {
        if (multiploDe10(numeros[i])) {
            console.log(numeros[i])
            return
        }
    }
    console.log("undefined")
}

const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
find(numeros, multiploDe10)