// Inicializacion de variables
let numeroDinamico = '';
let numero1 = 0;
let numero2 = 0;
let operacionPrevia = false;
let ultima_operacion = '';

let syntaxError = false; // ??

// Botones de la calculadora
const btn_AC = document.getElementById("btn_AC");
const btn_C = document.getElementById("btn_C");
const btn_mas_menos = document.getElementById("btn_mas_menos");
const btn_mod = document.getElementById("btn_mod");
const btn_7 = document.getElementById("btn_7");
const btn_8 = document.getElementById("btn_8");
const btn_9 = document.getElementById("btn_9");
const btn_div = document.getElementById("btn_div");
const btn_4 = document.getElementById("btn_4");
const btn_5 = document.getElementById("btn_5");
const btn_6 = document.getElementById("btn_6");
const btn_x = document.getElementById("btn_x");
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");
const btn_resta = document.getElementById("btn_resta");
const btn_0 = document.getElementById("btn_0");
const btn_coma = document.getElementById("btn_coma");
const btn_igual = document.getElementById("btn_igual");
const btn_suma = document.getElementById("btn_suma");

// Instancia de la clase Operaciones
const op = new Operaciones(0);

// numeros de la calculadora

/*
btn_coma.addEventListener("click", function() {
    if (numeroDinamico.length == 0) {
        numeroDinConvertido = '0.';
    }
    else {
        numeroDinamico.forEach(function(elemento) {
            if (elemento == '.') {
                console.log("syntaxError");
                syntaxError = true;
            }
        });

        if (syntaxError == true) {
            btn_AC.click();
            syntaxError = false;
        }
        else {
            numeroDinamico += '.';
        }
    }

    console.log("numero: " + numeroDinamico);
});
*/

btn_0.addEventListener("click", function() {
    if (numeroDinamico.length != 0) {
        numeroDinamico += '0';
        console.log("numero: " + numeroDinamico);
    }
    else {
        console.log("nada");
    }
});

btn_1.addEventListener("click", function() {
    numeroDinamico += '1';
    console.log("numero: " + numeroDinamico);
});

btn_2.addEventListener("click", function() {
    numeroDinamico += '2';
    console.log("numero: " + numeroDinamico);
});

btn_3.addEventListener("click", function() {
    numeroDinamico += '3';
    console.log("numero: " + numeroDinamico);
});

btn_4.addEventListener("click", function() {
    numeroDinamico += '4';
    console.log("numero: " + numeroDinamico);
});

btn_5.addEventListener("click", function() {
    numeroDinamico += '5';
    console.log("numero: " + numeroDinamico);
});

btn_6.addEventListener("click", function() {
    numeroDinamico += '6';
    console.log("numero: " + numeroDinamico);
});

btn_7.addEventListener("click", function() {
    numeroDinamico += '7';
    console.log("numero: " + numeroDinamico);
});

btn_8.addEventListener("click", function() {
    numeroDinamico += '8';
    console.log("numero: " + numeroDinamico);
});

btn_9.addEventListener("click", function() {
    numeroDinamico += '9';
    console.log("numero: " + numeroDinamico);
});

// operaciones de la calculadora

btn_igual.addEventListener("click", function() {
    if (operacionPrevia == true) { // si ya existe una operacion, entonces la hacemos Y LA MOSTRAMOS, y la guardamos en num1
        switch(ultima_operacion) {
            case '+':
                
                console.log(`${op.res}=`)
                break;
            case '++':
                console.log(`${op.res}+`)
                break;
        }

        ultima_operacion = '';
    }
    else {
        console.log(parseFloat(numeroDinamico));
    }
});

btn_suma.addEventListener("click", function() {
    if (operacionPrevia == true) { // si ya existe una operacion, entonces la hacemos y la guardamos en num1
        numero2 = parseFloat(numeroDinamico);
        op.res = op.suma(numero1, numero2);

        ultima_operacion = '++'; // suma sucesiva
        btn_igual.click();

        numeroDinamico = '';
        operacionPrevia = false;
    }
    else {
        operacionPrevia = true;
        numero1 = parseFloat(numeroDinamico);

        ultima_operacion = '+';

        numeroDinamico = '';
    }
});
