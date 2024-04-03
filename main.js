alert ("Bienvenido al simulador de carrito de compras.")
let n = prompt("Seleccione la opcion deseada:\n1-Armar carrito\n2-Calcular Cuotas\n3-Calcular descuento\n0-Salir")

if(n==1){
    const prod = prompt("Por favor indique el articulo:");
    const precio = parseFloat (prompt("Por favor indique su precio"));
    const articulo = prod + " $" + precio +"\n";
    alert ("Producto añadido con exito.");
    alert (articulo); 
}else if(n==2){
    //Funcion de lista, muestra los producctos en la opcion 1.
    let total = parseFloat(prompt("Ingrese el total de su compra o producto:"));
    let coutas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    let interes = parseFloat(prompt("Ingrese el interes acordado:"));
    montoCuota = calcularMontoCuota(total, coutas, interes);
    alert ("El valor de cada cuota es: $" + montoCuota);
}else if(n==3){
    let importe = parseFloat(prompt("Ingrese el importe total de su compra:"));
    let desc = parseInt(prompt("Ingrese el descuento a calcular:"));
    totalDesc = importe - ((desc / 100) * importe);
    alert("El total a pagar es: " + totalDesc);
}else if(n==0){
    alert("Gracias, que tenga un buen dia.");
}
else{
    alert("Opcion incorrecta.");
}

function calcularMontoCuota(total, cuotas, interes) {
    // Calcular el monto de cada cuota
    let montoSinInteres = total / cuotas;
    let montoInteres = (total * (interes / 100)) / cuotas;
    let montoCuota = montoSinInteres + montoInteres;
    return montoCuota;
}