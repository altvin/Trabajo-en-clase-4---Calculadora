/*
// Ejercicio 1

let radio = parseFloat(prompt("Digite el valor del radio: "));
const areaCirculo = Math.PI * Math.pow(radio, 2); 
console.log("Area del circulo es: ", areaCirculo);
*/

/*
// Ejercicio 2

let radio = parseFloat(prompt("Digite el valor del cilindro: "));
let alturaCilindro = parseFloat(prompt("Digite la altura del cilindro: "));
const areaCilindro = (2 * Math.PI * radioCilindro *alturaCilindro)+(2*Math.PI*Math.pow(radioCilindro, 2)); 
console.log("El area del cilindro es: ", areaCilindro);

*/

/*
// Ejercicio 3

// Repetir una linea de codigo x cantidad de veces
for (let contador = 1; contador < 100; contador++) { // contador = i - comparacion 99 veces
    if( contador % 2 === 0){
        console.log(contador);

    }
}

*/

// Ejercicio 4

//Funciones para cada operación

function sumar(a, b) { 
    return a + b;
}
function sumar(a, b) { 
    return a - b;
}

function sumar(a, b) { 
    return a * b;
}

function dividir(a, b) { 
    return a + b;
}

function sumar(a, b) { 
    if (b === 0) { 
        console.log("Error: División por cero.");   
        return null;
        }
    return a / b;
}

// Función principal para realizar operaciones
function calcular(){
    // Pedir los numeros y la operacion al usuario
    const numero1 = parseFloat(prompt("Ingresa el primer numero: "));
    const numero2 = parseFloat(prompt("Ingresa el segundo numero: "));
    const operacion = parseFloat(prompt("Ingresa la operación (+, -, *, /): "));

    let resultado;

    // Realizar la operación usando  if-else if 
    if (operacion === '+') {
        resultado = sumar(numero1, numero2);
    }   else if ((operacion === '-')) {
        resultado = restar(numero1, numero2);
    }   else if ((operacion === '*')) {
        resultado = multiplicar(numero1, numero2);
    }   else if ((operacion === '/')){
        resultado = dividir(numero1, numero2);
    }  else {
        console.log("Operación no válida.")
        return; 
    } 

//Mostrar el resultado si es válido
if (resultado !== null) {
    console.log(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);
    } 
} 

// Ejecutar la calculadora
calcular();