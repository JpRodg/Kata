function generarList(numeros) {
    let S = 7;

    // Extraer dígitos menores que S y convertirlos en números
    let filtrarNumeros = numeros.map(function (numero) {
        let digitos = numero.toString().split('').filter(function (digitar) {
            return parseInt(digitar) < S;
        }).join('');

        // Si la cadena filtrada está vacía.
        return digitos === '' ? NaN : parseInt(digitos, 10);
    }).filter(function (numero) {
        return !isNaN(numero); // Filtrar los NaN resultantes
    });

    // Invertir el orden del array
    let vNumeros = filtrarNumeros.reverse();

    // Mostrar el resultado
    console.log(vNumeros);
}

let examples = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 22, 20, 30, 40],
    [7],
    [77],
    [76],
    [6, 2, 1],
    [70, 7, 6, 5, 4, 3, 2, 8, 8, 29, 1]
];

// Ejecutar la función para cada array de ejemplos
examples.forEach(function (example) {
    console.log(`Input: ${example} -> Output:`);
    generarList(example);
});
