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
        
        // valor actual se añade a la suma acumulada.
        acumulado += moneda;
    }

    // Si todas las monedas han sido procesadas.
    return acumulado + 1;
}

// Ejemplo
let monedas = [1, 5, 1, 1, 1, 10, 15, 20, 100];

// valor mínimo que no se puede formar.
let miMinimo = valorMinimo(monedas);
console.log(miMinimo); 