function limpiarFormulario() {
	document.getElementById("miForm").reset();
}

var Pot = function(N1){
var A1 = parseFloat(document.getElementById("A1").value);
var Resultado = A1*A1*A1*A1*A1;
    return "La Respuesta de Elevar "+A1+" a la Quinta Potencia es "+Resultado;
}

var Mi = function(N1){
var KM = parseFloat(document.getElementById("KM").value);
Mi = KM * 0.621371;
      return KM+" Kilómetros son "+Mi+" Millas";
}