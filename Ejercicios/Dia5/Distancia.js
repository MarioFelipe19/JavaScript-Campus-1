function distancia(str1, str2) {
    let diferencias = 0;
    const longMaxima = Math.max(str1.length, str2.length);

    for (let i = 0; i < longMaxima; i++) {
        if (i >= str1.length || i >= str2.length || str1[i] !== str2[i]) {
            diferencias++;
        }
    }

    return diferencias;
}


console.log(distancia("hola", "hola")); 