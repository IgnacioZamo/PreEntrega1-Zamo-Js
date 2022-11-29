let ingreseNombre = prompt("Ingese su nombre, por favor");
let saludo = `Bienvenido ${ingreseNombre} !`;
alert (saludo);

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

