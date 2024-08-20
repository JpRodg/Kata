function cuadradosOrdenados(arr, S) {

    const n = arr.length;
    // n almacenado con 0.
    const resultado = new Array(n).fill(0);
    //Inicio y final.
    let left = 0;
    let right = n - 1;
    let index = n - 1;


    while (left <= right) {
        // Calcula la posicion elevada.
        const leftCuadrado = arr[left] ** 2;
        const rightCuadrado = arr[right] ** 2;

        if (leftCuadrado > rightCuadrado) {
            // El rango cumple se coloca en 'resultado'.
            if (leftCuadrado <= S * 11) {
                resultado[index] = leftCuadrado;
                index--; // Decrementa el índice para el próximo valor.
            }
            left++; // Una posición a la derecha.
        } else {
            
            if (rightCuadrado <= S * 11) {
                resultado[index] = rightCuadrado;
                index--;
            }
            right--; 
        }
    }

    // Filtra elementos fuera del rango.
    const resultadoFinal = resultado.filter(num => num !== 0);
    return resultadoFinal; // Devuelve el array filtrado y ordenado.
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
