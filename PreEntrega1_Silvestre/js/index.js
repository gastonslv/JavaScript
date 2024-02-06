function mostrarCarrito(a40L, a20L, a5L, a1500ml, a750ml) {
    let total = 0;

    console.log(`Carrito:\n`);
    
    if(a40L > 0) {
        console.log(`\t> ${a40L} aceite/s de 40Lts    -> $${a40L * 70000}\n`);

        total += (a40L * 70000);
    }

    if(a20L > 0) {
        console.log(`\t> ${a20L} aceite/s de 20Lts    -> $${a20L * 40000}`);

        total += (a20L * 40000);
    }

    if(a5L > 0) {
        console.log(`\t> ${a5L} aceite/s de 5Lts    -> $${a5L * 12000}`);

        total += (a5L * 12000);
    }
    
    if(a1500ml > 0) {
        console.log(`\t> ${a1500ml} aceite/s de 1500ml    -> $${a1500ml * 3000}`);
        
        total += (a1500ml * 3000);
    }
    
    if(a750ml > 0) {
        console.log(`\t> ${a750ml} aceite/s de 500ml    -> $${a750ml * 2000}`);
        
        total += (a750ml * 2000);
    }

    console.log(`\nTotal: $ ${total}`);
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
    
    do {
        console.log(`
            Elegir producto:\n
            \t1.Aceite 40L - $70.000\n
            \t2.Aceite 20L - $40.000\n
            \t3.Aceite 5L - $12000\n
            \t4.Aceite 1500ml - $3000\n
            \t5.Aceite 750ml - $2000\n`);
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
let aceite1500ml = 0;
let aceite750ml = 0;

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
            console.log(aceite5Lts);
            break;
        case 4:
            aceite1500ml++;
            break;
        case 5:
            aceite750ml++;
            break;
    }

    mostrarCarrito(aceite40Lts, aceite20Lts, aceite5Lts, aceite1500ml, aceite750ml);

    decisionUsuario = continuarCompra();

    if (decisionUsuario == 's') {
        seguirComprando = true;
    }
    else {
        seguirComprando = false;
        console.log("Fin Programa.")
    }
}