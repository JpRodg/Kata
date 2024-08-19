function valorMinimo(monedas){

    // Ordena las monedas.
    monedas.sort((a, b) => a - b);

    // Inicializa una variable que almacenará la suma total de las monedas
    let acumulado = 0;

    // Recorre cada moneda en el array de monedas.
    for (let moneda of monedas){

        if (moneda > acumulado + 1) {
            // Retorna el valor mínimo No formar.
            return acumulado + 1;
        } 
        
        // Añade a la suma acumulada.
        acumulado += moneda;
    }

    // Si todas las monedas han sido procesadas, retorna el siguiente valor que no se puede formar.
    return acumulado + 1;
}

// Ejemplo
let monedas = [1, 5, 1, 1, 1, 10, 15, 20, 100];

// Llama a la función para encontrar el valor mínimo que no se puede formar con las monedas dadas.
let miMinimo = valorMinimo(monedas);
console.log(miMinimo); 