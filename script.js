// Ejercicio 4
// Calculadora
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
    
    // Pedir los números y la operación al usuario
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
