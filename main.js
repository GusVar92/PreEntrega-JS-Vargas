function armarCarrito() {
    let prod = prompt("Por favor indique el articulo que desea comprar:\n1- Mesa de comedor - $5999\n2- Rack TV 50 - $3999\n3- Juego de Sillones - $9999\n4- Escritorio - $2999\n5- Sommier King Size - $12999");
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
    if(prod === "1"){
        if(cantidad>mueble1.stock){
            console.log("Stock no disponible, ingrese una cantidad menor o intente mas tarde.")
            armarCarrito();
        }
        ticket(cantidad);
    }
}

function ticket(cantidad){
    let total = mueble1.precio * cantidad;
    let restante = mueble1.stock - cantidad;
    console.log("Producto añadido con exito $" + total);
    console.log("Quedan " + restante + " unidades.")
    return total;
}

function Muebles(articulo, precio, stock) {
    this.articulo = articulo;
    this.precio = precio;
    this.stock = stock;
}

const mueble1 = new Muebles("Mesa de comedor", 5999, 5);
const mueble2 = new Muebles("Rack TV 50", 3999, 10);
const mueble3 = new Muebles("Juego de Sillones", 9999, 3);
const mueble4 = new Muebles("Escritorio", 2999, 5);
const mueble5 = new Muebles("Sommier King Size", 12999, 3);
const mueble6 = new Muebles("Ropero de Algarrobo", 7999, 2);

// const prodsEnArray = [mueble1, mueble2, mueble3, mueble4, mueble5, mueble6]

function calculadoraDeCoutas() {
    //Funcion de lista, muestra los productos en la opcion 1.
    let total = parseFloat(prompt("Ingrese el total de su compra o producto:"));
    let coutas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    let interes = parseFloat(prompt("Ingrese el interes acordado:"));
    montoCuota = calcularMontoCuota(total, coutas, interes);
    alert("El valor de cada cuota es: $" + montoCuota);
}

function calcularMontoCuota(total, cuotas, interes) {
    // Calcular el monto de cada cuota
    let montoSinInteres = total / cuotas;
    let montoInteres = (total * (interes / 100)) / cuotas;
    let montoCuota = montoSinInteres + montoInteres;
    return montoCuota;
}

function calculadorDeDescuento() {
    //Calculadora de importe
    let importe = parseFloat(prompt("Ingrese el importe total de su compra:"));
    let desc = parseInt(prompt("Ingrese el descuento a calcular:"));
    totalDesc = importe - ((desc / 100) * importe);
    alert("El total a pagar es: " + totalDesc);
}

function welcome() {
    alert("Bienvenido Muebleria CoderHouse.")
    let opcion = prompt("Seleccione la opcion deseada:\n1-Ver Catalogo\n2-Calcular Cuotas\n3-Calcular descuento\n0-Salir")
    return opcion;
}

let n = welcome();

while (n !== "1" && n !== "2" && n !== "3" && n !== "0") {
    alert("Opcion incorrecta");
    n = welcome();
}

if (n == 1) {
    armarCarrito();
} else if (n == 2) {
    calculadoraDeCoutas();
} else if (n == 3) {
    calculadorDeDescuento();
} else {
    //Mensaje de finalizacion
    alert("Gracias, que tenga un buen dia.");
}