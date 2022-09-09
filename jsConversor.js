function Converter() {
    var valorElemento = document.getElementById("value");
    var valorParaConverter = parseFloat(valorElemento.value);
    var moeda = document.getElementById("moeda").value;

    if (moeda == "Dolar") {
        var valorEmReal = valorParaConverter * 5.25;
        console.log(valorEmReal);
    } else if (moeda == "Euro") {
        var valorEmReal = valorParaConverter * 5.24;
        console.log(valorEmReal);
    } else {
        var valorEmReal = valorParaConverter * 0.036;
        console.log(valorEmReal);
    }

    var elementoValorConvertido = document.getElementById("result");
    var result = "O resultado em real é R$" + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = result;

    var valorEmBitcoin = valorEmReal * 0.0000099;
        console.log(valorEmBitcoin);
    var elementoValorConvertido = document.getElementById("bitcoin");
    var bitcoin = "E em bitcoin é BTC " + valorEmBitcoin.toFixed(6);
    elementoValorConvertido.innerHTML = bitcoin;
}