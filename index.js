let ingreseNombre = prompt("Ingese su nombre, por favor");
let saludo = `Bienvenido ${ingreseNombre} !`;
alert (saludo);




// let resultado = 0;
// let prod1 = Number(prompt("Seleccione producto a adquirir (maximo 4): 1: Cable USB $500, 2: Cargador $800 , 3: Blindex $400, 4: Carcaza $1000, 5: bateria $2500, 6: Terminar"));

// for (let i = 0; i<=4; i++) {
//     if (prod1 === 1 ) {
//         resultado = resultado + 500;
//             alert(`Producto ${i} ingresado`);
//     } else if (prod === 2) {
//     resultado = resultado + 800;
//     alert(`Producto ${i} ingresado`);
//     } else if (prod === 3) {
//         resultado = resultado + 400;
//         alert(`Producto ${i} ingresado`);
            
            
//     } else if (prod === 4) {
//         resultado = resultado + 1000;
//         alert(`Producto ${i} ingresado`);
                
                
//     } else if (prod === 5) {
//         resultado = resultado + 2500;
//         alert(`Producto ${i} ingresado`);
                    
                    
//     } else if (prod === 6) {
//         i = i+5
//         alert (`Total a abonar: ${resultado}`);
//     } 
//     let prod1 = Number(prompt("Seleccione producto a adquirir (maximo 4): 1: Cable USB $500, 2: Cargador $800 , 3: Blindex $400, 4: Carcaza $1000, 5: bateria $2500, 6: Terminar"));
//   }
// alert (`total a pagar será de: $${resultado}`);




// const cableUSB = 500;
// const cargador = 800;
// const blindex = 400;
// const carcaza = 1000;
// const bateria = 2500;


alert ("Seleccione 3 productos a adquirir y la cantidad de cada uno, por favor");
let seleccionarProductos = Number(prompt("1-Cable USB $500, 2-Cargador $800, 3-Blindex $400, 4-Carcaza $1000 5-Bateria $2500 0-Salir"));
let Cantidad;
let total = 0;



for (let i = 0; i<3; i = i + 1) {
    switch (seleccionarProductos) {
        case 1:
            Cantidad = Number(prompt("Seleccione cantidad a adquirir"));
            total = total + (Cantidad * 500);
            break;
        case 2:
            Cantidad = Number(prompt("Seleccione cantidad a adquirir"));
            total = total + (Cantidad * 800);
            break;
        case 3:
            Cantidad = Number(prompt("Seleccione cantidad a adquirir"));
            total = total + (Cantidad * 400);
            break;
        case 4:
            Cantidad = Number(prompt("Seleccione cantidad a adquirir"));
            total = total + (Cantidad * 1000);
            break;
        case 5:
            Cantidad = Number(prompt("Seleccione cantidad a adquirir"));
            total = total + (Cantidad * 2500);
            break;
        default:
            alert ("Valor incorrecto");
            break;

    }
    let producto = Number(prompt("1-Cable USB $500, 2-Cargador $800, 3-Blindex $400, 4-Carcaza $1000 5-Bateria $2500 0-Salir"));

}
alert (`El total de su compra es: $ ${total}`);

