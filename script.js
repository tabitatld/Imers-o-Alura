var valorEmDolarTexto = prompt("Qual valor em dólar você quer converter")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.60
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmReal)

