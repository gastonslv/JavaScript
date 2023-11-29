// FUNCIONES //

function menu(res){
    opcion = 0;

    do{
        opcion = parseInt(prompt("Resultado acutal: " + res +
            "\n\nMenu de opciones\n" +
            "\t1.Suma\n" +
            "\t2.Resta\n" +
            "\t3.Multiplicacion\n" +
            "\t4.Division\n" +
            "\t5.Salir"));

        if ((opcion < 1) || (opcion > 5)){
            alert("El numero que ingreso, no coincide con las opciones desplegadas!\n" +
                "Por favor, vuelva a intentarlo.");
        }

    }while((opcion < 1) || (opcion > 5));

    return opcion;
}

function sumar(res){
    let numero = 0;
    let c_num = parseInt(prompt("Ingrese la cantidad de numeros a sumar."));

    for(let i=0; i < c_num; i++){
        numero = parseInt(prompt("Numero " + (i+1) + ": "));
        res += numero;
    }

    return res;
}

function restar(res){
    let numero = 0;
    let c_num = parseInt(prompt("Ingrese la cantidad de numeros a restar."));

    for(let i=0; i < c_num; i++){
        numero = parseInt(prompt("Numero " + (i+1) + ": "));
        if (numero > 0){
            numero *= (-1); // lo convertimos en negativo
        }
        res += numero; // da igual que se sumen, ya que 'numero' es %100 negativo
    }

    return res;
}

let multiplicar = res => {
    let mult = 0; 
    mult = parseInt(prompt("Ingrese un multiplicador."));
    res *= mult;
    return res;
}

function dividir(res){
    let div = 0;
    do{
        div = parseInt(prompt("Ingrese un divisor, distino a cero."));
    }while(div == 0)
    res /= div;
    return res;
}

// PROGRAMA PRINCIPAL //

// inicializacion variables globales

let apagar = false;
let opcionUsuario = 0;
let resultado = 0;

alert("Bienviendo a la calculadora virtual!");

while(apagar == false){

    opcionUsuario = menu(resultado);

    switch(opcionUsuario){
        case 1:
            resultado = sumar(resultado);
            break;
        case 2:
            resultado = restar(resultado);
            break;
        case 3:
            resultado = multiplicar(resultado);
            break;
        case 4:
            resultado = dividir(resultado);
            break;
        case 5:
            apagar = true; // salimos del programa
            alert("Hasta la proxima!");
            break;
    }
}