function compararNumeros() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    var resultadoDiv = document.getElementById("resultado");
    var mensajeDiv = document.getElementById("mensaje");

    if (num1 > num2) {
        var suma = num1 + num2;
        var diferencia = num1 - num2;
        mensajeDiv.textContent = "Suma: " + suma + ", Diferencia: " + diferencia;
    } else {
        var producto = num1 * num2;
        var division = num1 / num2;
        mensajeDiv.textContent = "Producto: " + producto + ", División: " + division;
    }

    resultadoDiv.style.display = "block";
}