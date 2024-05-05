function armarCarrito(){
    //Armado basico de lista (por ahora 1 articulo, añadir funcion para guardar items y mostrar lista para la siguiente pre-entrega)
    let prod = prompt("Por favor indique el articulo:");
    let precio = parseFloat (prompt("Por favor indique su precio"));
    let articulo = prod + " $" + precio +"\n";
    alert ("Producto añadido con exito.");
    alert (articulo);
}

function calculadoraDeCoutas(){
    //Funcion de lista, muestra los producctos en la opcion 1.
    let total = parseFloat(prompt("Ingrese el total de su compra o producto:"));
    let coutas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    let interes = parseFloat(prompt("Ingrese el interes acordado:"));
    montoCuota = calcularMontoCuota(total, coutas, interes);
    alert ("El valor de cada cuota es: $" + montoCuota);
}

function calcularMontoCuota(total, cuotas, interes) {
    // Calcular el monto de cada cuota
    let montoSinInteres = total / cuotas;
    let montoInteres = (total * (interes / 100)) / cuotas;
    let montoCuota = montoSinInteres + montoInteres;
    return montoCuota;
}

function calculadorDeDescuento(){
    //Calculadora de importe
    let importe = parseFloat(prompt("Ingrese el importe total de su compra:"));
    let desc = parseInt(prompt("Ingrese el descuento a calcular:"));
    totalDesc = importe - ((desc / 100) * importe);
    alert("El total a pagar es: " + totalDesc);
}

function welcome(){
    alert ("Bienvenido al simulador de carrito de compras.")
    let opcion = prompt("Seleccione la opcion deseada:\n1-Armar carrito\n2-Calcular Cuotas\n3-Calcular descuento\n0-Salir")
    return opcion;
}

welcome();

let n = welcome();

while(n != "1" && n != "2" && n != "3" && n != "0"){
    alert("Opcion incorrecta");
    n = welcome();
}

if(n==1){
    armarCarrito();
}else if(n==2){
    calculadoraDeCoutas();
}else if(n==3){
    calculadorDeDescuento();
}else{
    //Mensaje de finalizacion
    alert("Gracias, que tenga un buen dia.");
}