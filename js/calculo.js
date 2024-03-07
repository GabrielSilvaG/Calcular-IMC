function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        var imc = peso / Math.pow(altura, 2);
        var resultado = '';

        if (imc <= 18.5) {
            resultado = 'Abaixo do peso!'
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado = 'Peso saudável!'
        } else if (imc >= 24.9 && imc <= 29.9) {
            resultado = 'Sobrepeso.'
        } else if (imc >= 30 && imc <= 39.9) {
            resultado = 'Obeso cuidado!'
        } else {
            resultado = 'Muito obeso! OBS: Também conhecido como obeso mórbido'
        }

        document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>' + resultado
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos para peso e altura.';
    }

}






