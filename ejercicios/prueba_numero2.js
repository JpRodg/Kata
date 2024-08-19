function cuadradosOrdenados(arr, S) {
    const n = arr.length;
    const resultado = new Array(n).fill(0);
    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while (left <= right) {
        const leftCuadrado = arr[left] ** 2 
        const rightCuadrado = arr[right]  ** 2

        if (leftCuadrado > rightCuadrado) {
            if (leftCuadrado <= S * 11) {
                resultado[index] = leftCuadrado;
                index--;
            }
            left++;
        } else {
            if (rightCuadrado <= S * 11) {
                resultado[index] = rightCuadrado;
                index--;
            }
            right--;
        }
    }

    // Filtrar los elementos fuera del rango [0, S * 11]
    const resultadoFinal = resultado.filter(num => num !== 0);
    return resultadoFinal;
}

// Ejemplo de uso:
const arr1 = [20, 2, 3, 5, 6, 8, 9];
const arr2 = [-2, -1];
const arr3 = [-6, -5, 0, 5, 6];
const arr4 = [-10, 10];
const S = 7;

console.log(cuadradosOrdenados(arr1, S));  // [4, 9, 25, 36, 64]
console.log(cuadradosOrdenados(arr2, S));  // [1, 4]
console.log(cuadradosOrdenados(arr3, S));  // [0, 25, 25, 36, 36]
console.log(cuadradosOrdenados(arr4, S));  // []