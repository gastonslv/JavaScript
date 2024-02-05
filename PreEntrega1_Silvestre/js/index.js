function mostrarCarrito(a50L, a20L, a5L, a1500cm3, a750cm3) {
    
    console.log(`Carrito:\n`);
    
    if(a50L > 0) {
        console.log(`\t> ${a50L} aceite/s de 50Lts\n`);
    }

    if(a20L > 0) {
        console.log(`\t> ${a20L} aceite/s de 20Lts`);
    }

    if(a5L > 0) {
        console.log(`\t> ${a5L} aceite/s de 20Lts`);
    }

    if(a1500cm3 > 0) {
        console.log(`\t> ${a1500cm3} aceite/s de 20Lts`);
    }

    if(a750cm3 > 0) {
        console.log(`\t> ${a750cm3} aceite/s de 20Lts`);
    }
}

function continuarCompra() {
    let continuar = '';
    
    do {
        continuar = prompt('Desea continuar comprando?[s/n]');

        if (continuar != 's' && continuar != 'n') {
            console.log('Error, vuelva a intentarlo.')
        }
        else {
            if (continuar == 's') {
                console.log('Redirigiendo a la tienda...');
            }
            else {
                console.log('Finalizando seleccion de productos...')
            }
        }
    }while(continuar != 's' && continuar != 'n');

    return continuar;
}

function menu() {
    let producto = 0;

    console.log(`
        Elegir producto:\n
        \t1.Aceite 40L - $70.000\n
        \t2.Aceite 20L - $40.000\n
        \t3.Aceite 5L - $12000\n
        \t4.Aceite 1,5L - $3000\n
        \t5.Aceite 750cm3 - $2000\n`);
    
    do {
        producto = parseInt(prompt("Elegir producto"));
    }while(producto <= 0 || producto >= 6)

    return producto;
}

// Variables globales
let seguirComprando = true;
let decisionUsuario = '';
let productoID = 0;
let aceite40Lts = 0;
let aceite20Lts = 0;
let aceite5Lts = 0;
let aceite1500cm3 = 0;
let aceite750cm3 = 0;

// Main
while (seguirComprando == true) {
    productoID = menu();

    switch (productoID) {
        case 1:
            aceite40Lts++;
            break;
        case 2:
            aceite20Lts++;
            break;
        case 3:
            aceite5Lts++;
            break;
        case 4:
            aceite1500cm3++;
            break;
        case 5:
            aceite750cm3++;
            break;
    }

    mostrarCarrito(aceite40Lts, aceite20Lts, aceite5Lts, aceite1500cm3, aceite5Lts);

    decisionUsuario = continuarCompra();

    if (decisionUsuario == 's') {
        seguirComprando = true;
    }
    else {
        seguirComprando = false;
        console.log("Fin Programa.")
    }
}